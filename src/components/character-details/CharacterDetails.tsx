import { useCallback, useEffect, useRef } from 'react';
import { useInfiniteQuery, useQueryClient } from 'react-query';
import { ICharacterDetailsProps } from '.';
import { get } from '../../services/httpService';
import {
  COMICS_PAGE_LIMIT,
  standardImageVariants,
} from '../../utils/constants';
import { IGetCharacterComicsResponse } from '../../views/details';
import Loader from '../Loader';

export default function CharacterDetails({
  character,
}: ICharacterDetailsProps) {
  const queryClient = useQueryClient();
  const loaderRef = useRef<HTMLDivElement>(null);

  const getCharacterComics = useCallback(
    ({ pageParam = 0 }) =>
      get(
        `https://gateway.marvel.com/v1/public/characters/${character.id}/comics`,
        {
          offset: pageParam,
          limit: COMICS_PAGE_LIMIT,
        },
      ),
    [],
  );

  const { data, error, isLoading, fetchNextPage, hasNextPage } =
    useInfiniteQuery<IGetCharacterComicsResponse>(
      'getCharacterComics',
      getCharacterComics,
      {
        getNextPageParam: (lastPage) => {
          if (
            lastPage.data.offset > lastPage.data.total ||
            lastPage.data.limit > lastPage.data.total
          ) {
            return undefined;
          }
          return lastPage.data.offset + COMICS_PAGE_LIMIT;
        },
      },
    );

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
      queryClient.setQueryData('getCharacterComics', () => ({
        pages: [res.data?.pages[res.data?.pages?.length - 1]],
        pageParams: res.data?.pageParams[res.data?.pageParams?.length - 1],
      }));
    });
  }, [fetchNextPage, queryClient]);

  return error ? (
    <div> {JSON.stringify(error)}</div>
  ) : isLoading ? (
    <div>Loading Data...</div>
  ) : (
    <div
      className="flex flex-col justify-between align-center mt-8 px-8 py-4 h-full"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
    >
      <h3 className="font-bold text-2xl text-center mb-4 text-primaryRed">
        Comics ({data?.pages[0]?.data.total})
      </h3>
      {data?.pages.map((page) => {
        return page.data.results.map((comic) => {
          const imgSrc = `
    ${comic.thumbnail.path}/${standardImageVariants.fantastic}.${comic.thumbnail.extension}
  `;
          return (
            <div key={comic.id} className="p-2 mb-4 flex flex-col md:flex-row">
              <img src={imgSrc} alt={comic.title} />
              <div className="flex flex-col justify-center p-2">
                <h3 className="text-black text-2xl mb-2">{comic.title}</h3>
                <div className="text-white mb-2">{comic.description}</div>
                <div className="text-secondaryRed mb-2">
                  Last update: {new Date(comic.modified).toDateString()}
                </div>
                <a
                  className="bg-black w-24 text-center text-secondaryRed rounded"
                  href={comic.urls[0]?.url}
                  target="_blank"
                >
                  Go To
                </a>
              </div>
            </div>
          );
        });
      })}
      <div ref={loaderRef} style={{ textAlign: 'center' }}>
        {hasNextPage ? <Loader /> : null}
      </div>
    </div>
  );
}
