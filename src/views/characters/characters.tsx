import { useCallback, useEffect, useRef, useState } from 'react';

import { ICharacter } from '.';
import CharacterCard from '../../components/character-card';
import { get } from '../../services/httpService';

export default function Characters() {
  const [page, setPage] = useState(0);
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const loaderRef = useRef<HTMLDivElement>(null);

  const fetchCharacters = useCallback(
    (str?: string) => {
      get('https://gateway.marvel.com/v1/public/characters', {
        offset: page * 12,
        limit: 12,
      }).then((response) =>
        setCharacters((prevCharacters) => {
          if (str) {
            return response.data.results;
          }
          return [...prevCharacters, ...response.data.results];
        }),
      );
    },
    [page],
  );

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  }, []);

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
      <main
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          rowGap: '20px',
        }}
      >
        {characters.map((character, index) => {
          return (
            <CharacterCard
              key={`${character.id} + ${index}`}
              character={character}
            />
          );
        })}
      </main>
      <div ref={loaderRef} style={{ textAlign: 'center' }}>
        Loading...
      </div>
    </>
  );
}
