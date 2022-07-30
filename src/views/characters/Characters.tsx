import {
  ChangeEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useInfiniteQuery, useQueryClient } from 'react-query';
import debounce from 'lodash.debounce';
import { useHistory } from 'react-router-dom';

import { IGetCharacterResponse } from '.';
import CharacterCard from '../../components/character-card';
import Loader from '../../components/Loader';
import { get } from '../../services/httpService';
import { CHARACTERS_PAGE_LIMIT } from '../../utils/constants';

export default function Characters() {
  const queryClient = useQueryClient();
  const loaderRef = useRef<HTMLDivElement>(null);
  const [search, setSearch] = useState('');
  const history = useHistory();

  const getCharacters = useCallback(
    ({ pageParam = 0 }) =>
      get('https://gateway.marvel.com/v1/public/characters', {
        offset: pageParam,
        limit: CHARACTERS_PAGE_LIMIT,
        nameStartsWith: search ? search : undefined,
      }),
    [search],
  );

  const { data, error, isLoading, fetchNextPage, hasNextPage } =
    useInfiniteQuery<IGetCharacterResponse>('getCharacters', getCharacters, {
      getNextPageParam: (lastPage) => {
        if (
          lastPage.data.offset > lastPage.data.total ||
          lastPage.data.limit > lastPage.data.total
        ) {
          return undefined;
        }
        return lastPage.data.offset + CHARACTERS_PAGE_LIMIT;
      },
    });

  const handleObserver = useCallback(
    (entries: any[]) => {
      if (hasNextPage) {
        const target = entries[0];
        if (target.isIntersecting) {
          fetchNextPage();
        }
      }
    },
    [fetchNextPage, hasNextPage],
  );

  const debouncedSearch = useCallback(
    debounce((nextValue) => setSearch(nextValue), 300),
    [],
  );

  const handleSearch: ChangeEventHandler<HTMLInputElement> = (e) => {
    debouncedSearch(e.target.value);
  };

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loaderRef.current) observer.observe(loaderRef.current);
  }, [handleObserver]);

  useEffect(() => {
    fetchNextPage({ pageParam: 0 }).then((res) => {
      queryClient.setQueryData('getCharacters', () => ({
        pages: [res.data?.pages[res.data?.pages?.length - 1]],
        pageParams: res.data?.pageParams[res.data?.pageParams?.length - 1],
      }));
    });
  }, [fetchNextPage, queryClient, search]);

  return (
    <div>
      {error ? (
        <div>{JSON.stringify(error)}</div>
      ) : isLoading ? (
        <div>Loading Data...</div>
      ) : (
        <>
          <input
            type="search"
            onChange={handleSearch}
            placeholder="search"
            className="mx-8 my-2 float-right w-40 p-2 border border-black border-solid"
          />
          <article className="m-8 flex flex-wrap gap-x-4 gap-y-4 clear-both grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 auto-cols-auto">
            {data?.pages.map((page) => {
              return page.data.results.map((character, index) => {
                return (
                  <CharacterCard
                    key={`${character.id} + ${index}`}
                    character={character}
                    onClick={id => history.push(`characters/${id}`)}
                  />
                );
              });
            })}
          </article>
        </>
      )}
      <div ref={loaderRef} style={{ textAlign: 'center' }}>
        {hasNextPage ? <Loader /> : null}
      </div>
    </div>
  );
}
