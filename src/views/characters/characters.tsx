import { useEffect, useState } from 'react';

import { ICharacter } from '.';
import CharacterCard from '../../components/character-card';
import { get } from '../../services/httpService';

export default function Characters() {
  const [characters, setCharacters] = useState<ICharacter[]>([]);

  useEffect(() => {
    get('https://gateway.marvel.com/v1/public/characters').then((response) =>
      setCharacters(response.data.results),
    );
  }, []);

  return (
    <div>
      {characters.map((character) => {
        return <CharacterCard key={character.id} character={character} />;
      })}
    </div>
  );
}
