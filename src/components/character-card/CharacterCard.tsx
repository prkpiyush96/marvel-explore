import { ICharacterCardProps } from '.';
import { landscapeImageVariants } from '../../utils/constants';

export default function CharacterCard({ character }: ICharacterCardProps) {
  const imgSrc = `
    ${character.thumbnail.path}/${landscapeImageVariants.medium}.${character.thumbnail.extension}
  `;
  return (
    <div>
      <img src={imgSrc} alt={character.name} />
      <h4>{character.name}</h4>
    </div>
  );
}
