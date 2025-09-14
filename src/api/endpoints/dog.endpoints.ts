import type { IAllDogImages, IBreedsList, IRandomDogImage } from "../../types";
import { apiRequest } from "../api";

export class dogsEndpoints {

  getBreedList = async (): Promise<IBreedsList> => {
    return await apiRequest<IBreedsList>("/breeds/list/all", "GET");
  };

  getRandomByBreed = async (breed: string): Promise<IRandomDogImage> => {
    return await apiRequest<IRandomDogImage>(
      `/breed/${breed}/images/random`,
      "GET"
    );
  };

  getAllByBreed = async (breed: string): Promise<IAllDogImages> => {
    return await apiRequest<IAllDogImages>(`/breed/${breed}/images`, "GET");
  };
}
