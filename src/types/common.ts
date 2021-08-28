export interface IUrl {
  type: string;
  url: string;
}

export interface IThumbnail {
  extension: string;
  path: string;
}

export interface IResourceObject {
  available: number;
  returned: number;
  collectionURI: string;
  items: Array<any>;
}
