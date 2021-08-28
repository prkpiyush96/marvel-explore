import { ICharacterCardProps } from '.';
import { portraitImageVariants } from '../../utils/constants';

export default function CharacterCard({ character }: ICharacterCardProps) {
  const imgSrc = `
    ${character.thumbnail.path}/${portraitImageVariants.incredible}.${character.thumbnail.extension}
  `;
  return (
    <div style={{ margin: '10px', textOverflow: 'ellipsis' }}>
      <img src={imgSrc} alt={character.name} />
      <h4>{character.name}</h4>
    </div>
  );
}
