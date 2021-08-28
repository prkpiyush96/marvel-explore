import { ICharacterCardProps } from '.';
import { landscapeImageVariants } from '../../utils/constants';

export default function CharacterCard({ character }: ICharacterCardProps) {
  return (
    <>
      <h4>{character.name}</h4>
      <img
        src={`${character.thumbnail.path}/${landscapeImageVariants.incredible}.${character.thumbnail.extension}`}
        alt={character.name}
      />
    </>
  );
}
