import { ICharacterCardProps } from '.';
import { standardImageVariants } from '../../utils/constants';

export default function CharacterCard({ character }: ICharacterCardProps) {
  const imgSrc = `
    ${character.thumbnail.path}/${standardImageVariants.large}.${character.thumbnail.extension}
  `;
  return (
    <div style={{ textOverflow: 'ellipsis', width: '10%' }}>
      <img src={imgSrc} alt={character.name} />
      <h4>{character.name}</h4>
    </div>
  );
}
