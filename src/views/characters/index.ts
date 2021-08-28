import { IUrl, IThumbnail, IResourceObject } from '../../types/common';

export interface ICharacter {
  id: number;
  name: string;
  description: string;
  modified: Date;
  resourceURI: string;
  urls: Array<IUrl>;
  thumbnail: IThumbnail;
  comics: Array<IResourceObject>;
  stories: Array<IResourceObject>;
  events: Array<IResourceObject>;
  series: Array<IResourceObject>;
}

export { default } from './characters';
