import { useQuery } from "react-query";
import { useParams } from "react-router-dom"

import CharacterCard from "../../components/character-card";
import CharacterDetails from "../../components/character-details";
import Loader from "../../components/Loader";
import { get } from "../../services/httpService";
import { IGetCharacterResponse } from "../characters";

export default function Details() {
  const { id } = useParams<{ id: string }>();

  const getCharactedDetails = () => get(`https://gateway.marvel.com/v1/public/characters/${id}`);

  const { data, error, isLoading } = useQuery<IGetCharacterResponse>(`getCharacterDetails_${id}`, getCharactedDetails);

  const characterData = data?.data.results[0];

  if (isLoading || !characterData) return <Loader />;

  return (
    <div className="mt-4 mb-4 px-4 md:px-8 lg:px-24">
      <CharacterCard
        character={characterData}
        isDetails
      />
      <CharacterDetails 
        character={characterData}
      />
    </div>
  )
}
