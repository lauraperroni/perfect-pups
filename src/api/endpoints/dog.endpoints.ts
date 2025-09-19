import type { TAllDogImages, TBreedsList, TRandomDogImage } from "../../types";
import { apiRequest } from "../api";

export class dogsEndpoints {

  getBreedList = async (): Promise<TBreedsList> => {
    return await apiRequest<TBreedsList>("/breeds/list/all", "GET");
  };

  getRandomByBreed = async (breed: string): Promise<TRandomDogImage> => {
    return await apiRequest<TRandomDogImage>(
      `/breed/${breed}/images/random`,
      "GET"
    );
  };

  getAllByBreed = async (breed: string): Promise<TAllDogImages> => {
    return await apiRequest<TAllDogImages>(`/breed/${breed}/images`, "GET");
  };
}
