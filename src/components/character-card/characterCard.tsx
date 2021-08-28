import { ICharacterCardProps } from '.';
import { standardImageVariants } from '../../utils/constants';

export default function CharacterCard({ character }: ICharacterCardProps) {
  const imgSrc = `
    ${character.thumbnail.path}/${standardImageVariants.medium}.${character.thumbnail.extension}
  `;
  return (
    <div style={{ margin: '10px', textOverflow: 'ellipsis', flex: 1 / 10 }}>
      <img src={imgSrc} alt={character.name} />
      <h4>{character.name}</h4>
    </div>
  );
}
