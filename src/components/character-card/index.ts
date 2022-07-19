import { ICharacter } from '../../views/characters';

export interface ICharacterCardProps {
  character: ICharacter;
  onClick?: (id: number) => void;
  isDetails?: boolean;
}

export { default } from './CharacterCard';
