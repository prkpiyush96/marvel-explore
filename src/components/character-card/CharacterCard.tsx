import { ICharacterCardProps } from '.';
import { landscapeImageVariants } from '../../utils/constants';

export default function CharacterCard({ character }: ICharacterCardProps) {
  const imgSrc = `
    ${character.thumbnail.path}/${landscapeImageVariants.incredible}.${character.thumbnail.extension}
  `;
  return (
    <div className='flex items-center justify-center flex-col'>
      <img src={imgSrc} alt={character.name} />
      <h4>{character.name}</h4>
    </div>
  );
}
