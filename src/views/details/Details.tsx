import { useQuery } from "react-query";
import { useParams } from "react-router-dom"
import CharacterCard from "../../components/character-card";
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
    <div className="mt-4">
      <CharacterCard
        character={characterData}
        isDetails
      />
    </div>
  )
}
