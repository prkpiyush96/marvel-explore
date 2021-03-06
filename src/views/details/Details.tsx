import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import CharacterCard from '../../components/character-card';
import CharacterDetails from '../../components/character-details';
import Loader from '../../components/Loader';
import { get } from '../../services/httpService';
import { IGetCharacterResponse } from '../characters';

export default function Details() {
  const { id } = useParams<{ id: string }>();

  const getCharactedDetails = () =>
    get(`https://gateway.marvel.com/v1/public/characters/${id}`);

  const { data, error, isLoading } = useQuery<IGetCharacterResponse>(
    ['getCharacterDetails', id],
    getCharactedDetails,
  );

  const characterData = data?.data.results[0];

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  if (isLoading || !characterData) return <Loader />;

  return error ? (
    <div> {JSON.stringify(error)}</div>
  ) : isLoading ? (
    <div>Loading Data...</div>
  ) : (
    <div className="mt-4 mb-4 px-8">
      <CharacterCard character={characterData} isDetails />
      <CharacterDetails character={characterData} />
    </div>
  );
}
