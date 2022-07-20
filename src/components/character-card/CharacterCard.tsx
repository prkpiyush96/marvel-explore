import { ICharacterCardProps } from '.';
import { landscapeImageVariants } from '../../utils/constants';

export default function CharacterCard({ character, onClick, isDetails }: ICharacterCardProps) {
  const imgSrc = `
    ${character.thumbnail.path}/${isDetails ? landscapeImageVariants.fantastic : landscapeImageVariants.incredible}.${character.thumbnail.extension}
  `;

  return (
    <div
      className='flex items-center justify-center flex-col cursor-pointer'
      onClick={() => onClick && onClick(character.id)}
    >
      <img src={imgSrc} alt={character.name} />
      <h4 className='text-ellipsis whitespace-nowrap w-full overflow-hidden'>{character.name}</h4>
      {isDetails && <h3 className='text-center font-bold text-lg'>{character.description}</h3>}
    </div>
  );
}
