import { IResourceObject } from '../../types/common';
import { ICharacter } from '../../views/characters';

export interface ICharacterDetailsProps {
  character: ICharacter;
}

export interface IDetailListProps {
  title: string;
  items: Array<any>;
}

export { default } from './CharacterDetails';
