import { useState } from "react";
import Home from "./Home/Home";
import Gallery from "./Gallery/Gallery";
import type { PageTypeEnum, TAllDogImages, TRandomDogImage } from "../types";

export default function ReactProject() {
  const [pageSection, setPageSection] = useState<"home" | "gallery">("home");
  const [selectedBreed, setSelectedBreed] = useState<string>("");
  const [randomDogImage, setRandomDogImage] = useState<TRandomDogImage | null>(
    null
  );
  const [allDogImages, setAllDogImages] = useState<TAllDogImages | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [pageType, setPageType] = useState<PageTypeEnum | null>(null);

  return (
    <>
      {pageSection === "home" && (
        <Home
          setPageSection={setPageSection}
          selectedBreed={selectedBreed}
          setSelectedBreed={setSelectedBreed}
          setRandomDogImage={setRandomDogImage}
          setAllDogImages={setAllDogImages}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          setPageType={setPageType}
        />
      )}

      {pageSection === "gallery" && (
        <Gallery
          setPageSection={setPageSection}
          randomDogImage={randomDogImage}
          allDogImages={allDogImages}
          setRandomDogImage={setRandomDogImage}
          setAllDogImages={setAllDogImages}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          pageType={pageType}
          setPageType={setPageType}
        />
      )}
    </>
  );
}
