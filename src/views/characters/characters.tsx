import { useCallback, useEffect, useRef } from 'react';
import { useInfiniteQuery } from 'react-query';

import { IGetCharacterResponse } from '.';
import CharacterCard from '../../components/character-card';
import { get } from '../../services/httpService';

export default function Characters() {
  const loaderRef = useRef<HTMLDivElement>(null);

  const getCharacters = ({ pageParam = 0 }) =>
    get('https://gateway.marvel.com/v1/public/characters', {
      offset: pageParam,
      limit: 40,
    });

  const { data, error, isLoading, fetchNextPage } =
    useInfiniteQuery<IGetCharacterResponse>('getCharacters', getCharacters, {
      getNextPageParam: (lastPage) => lastPage.data.offset + 12,
    });

  const handleObserver = useCallback(
    (entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
        fetchNextPage();
      }
    },
    [fetchNextPage],
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
        <input type="search" />
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
        Loading More Data...
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
