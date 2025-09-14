export interface IRandomDogImage {
  message: string;
  status: string;
}

export interface IBreedsList {
  message: {
    [breed: string]: string[];
  };
  status: string;
}

export interface IAllDogImages {
  message: {
    [image: string]: string[];
  };
  status: string;
}
