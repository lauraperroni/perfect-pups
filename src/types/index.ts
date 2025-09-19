export type TRandomDogImage = {
  message: string;
  status: string;
};

export type TAllDogImages = {
  message: string[];
  status: string;
};

export type TBreedsList = {
  message: {
    [breed: string]: string[];
  };
  status: string;
};

export enum PageTypeEnum {
  RANDOM = 'RANDOM',
  ALL = 'ALL',
  NONE = 'NONE',
}
