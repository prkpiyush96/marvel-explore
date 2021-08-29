import {
  KeyboardEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useInfiniteQuery, useQueryClient } from 'react-query';

import { IGetCharacterResponse } from '.';
import CharacterCard from '../../components/character-card';
import { get } from '../../services/httpService';

const limit = 30;

export default function Characters() {
  const queryClient = useQueryClient();
  const loaderRef = useRef<HTMLDivElement>(null);
  const [search, setSearch] = useState('');

  const getCharacters = useCallback(
    ({ pageParam = 0 }) =>
      get('https://gateway.marvel.com/v1/public/characters', {
        offset: pageParam,
        limit: limit,
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
        return lastPage.data.offset + limit;
      },
    });

  const handleObserver = useCallback(
    (entries) => {
      if (hasNextPage) {
        const target = entries[0];
        if (target.isIntersecting) {
          fetchNextPage();
        }
      }
    },
    [fetchNextPage, hasNextPage],
  );

  const handleSearch: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.code === 'Enter') setSearch(e.currentTarget.value);
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
        pages: [res.data?.pages[res.data?.pages.length - 1]],
        pageParams: res.data?.pageParams[res.data?.pageParams.length - 1],
      }));
    });
  }, [fetchNextPage, queryClient, search]);

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          backgroundColor: '#fff',
          height: '40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h2>Characters</h2>
        <input
          type="search"
          onKeyPress={handleSearch}
          placeholder="press enter to search"
        />
      </header>
      {error ? (
        <div>{JSON.stringify(error)}</div>
      ) : isLoading ? (
        <div>Loading Data...</div>
      ) : (
        <main
          style={{
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          {data?.pages.map((page) => {
            return page.data.results.map((character, index) => {
              return (
                <CharacterCard
                  key={`${character.id} + ${index}`}
                  character={character}
                />
              );
            });
          })}
        </main>
      )}
      <div ref={loaderRef} style={{ textAlign: 'center' }}>
        {hasNextPage ? 'Loading More Data...' : ''}
      </div>
      <footer
        style={{
          position: 'fixed',
          backgroundColor: '#fff',
          bottom: 0,
          right: 0,
        }}
        dangerouslySetInnerHTML={{
          __html: data?.pages[0].attributionHTML || '',
        }}
      />
    </>
  );
}
