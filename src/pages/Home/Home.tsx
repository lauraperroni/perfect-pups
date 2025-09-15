import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import Title from "../../components/Title/Title";
import React, { useEffect, useState } from "react";
import { dogsEndpoints } from "../../api/endpoints/dog.endpoints";
import type { TBreedsList, TAllDogImages, TRandomDogImage } from "../../types";
import { Paragraph } from "./styles";
import blessDog from "../../assets/bless-dog.gif";
import loading from "../../assets/loading.gif";
import { PageTypeEnum } from "../../types";

interface IHome {
  selectedBreed: string;
  setPageSection: React.Dispatch<React.SetStateAction<"home" | "gallery">>;
  setSelectedBreed: (value: string) => void;
  setRandomDogImage: React.Dispatch<
    React.SetStateAction<TRandomDogImage | null>
  >;
  setAllDogImages: React.Dispatch<React.SetStateAction<TAllDogImages | null>>;
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  setPageType: (value: PageTypeEnum | null) => void;
}

const Home: React.FC<IHome> = ({
  selectedBreed,
  setPageSection,
  setSelectedBreed,
  setRandomDogImage,
  setAllDogImages,
  setPageType,
  isLoading,
  setIsLoading,
}) => {
  const [breedList, setBreedList] = useState<TBreedsList>();
  const dogsApi = new dogsEndpoints();

  const handleGetRandomPicture = async (selectedBreed: string) => {
    setIsLoading(true);
    try {
      const houndImage = await dogsApi.getRandomByBreed(selectedBreed);
      setRandomDogImage(houndImage.message);
      setAllDogImages({ message: [], status: "" });
      setPageSection("gallery");
      setPageType(PageTypeEnum.RANDOM);
      setIsLoading(false);
    } catch {
      setIsLoading(false);
      alert("1 erro kkkkk");
    }
  };

  const handleGetPictures = async (selectedBreed: string) => {
    setIsLoading(true);
    try {
      const houndImages = await dogsApi.getAllByBreed(selectedBreed);
      setAllDogImages(houndImages);
      setRandomDogImage({ message: "", status: "" });
      setPageSection("gallery");
      setPageType(PageTypeEnum.ALL);
      setIsLoading(false);
    } catch {
      setIsLoading(false);
    }
  };

  async function loadData() {
    const breeds = await dogsApi.getBreedList();
    setBreedList(breeds);
  }

  useEffect(() => {
    if (!breedList) loadData();
  }, [breedList]);

  return (
    <>
      {isLoading && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "80vh",
            width: "100vw",
          }}
        >
          <img style={{ width: "300px" }} src={loading} alt="loading..." />
          <div>
            <Title
              strokeColor="black"
              strokeWidth="3px"
              titleText={"LOADING"}
            />
          </div>
        </div>
      )}

      {!isLoading && (
        <Grid container style={{ minHeight: "90vh" }}>
          <Grid
            item
            xs={3}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {Array.from({ length: 11 }).map((_, index) => (
              <img
                key={index}
                src={loading}
                alt="loading"
                style={{ width: "80px", margin: "10px 0" }}
              />
            ))}
          </Grid>

          <Grid
            item
            xs={6}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "40px 0",
            }}
          >
            <div
              style={{
                backgroundColor: "blue",
                borderRadius: "15px",
                width: "100%",
                maxWidth: "100%",
                overflowWrap: "break-word",
                justifyItems: "center",
                padding: "0px 20px",
                borderStyle: "dashed",
                borderColor: "yellow",
                borderWidth: "10px",
                marginBottom: "20px",
              }}
            >
              <Title titleText={"Perfect Pups"} />
              <div style={{ textAlign: "center" }}>
                {Array.from({ length: 6 }).map((_, index) => (
                  <img src={blessDog} width={"50px"} key={index} />
                ))}
              </div>

              <div
                style={{
                  justifyItems: "center",
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  gap: "20px",
                }}
              >
                <Paragraph>Home</Paragraph>
                
              </div>
            </div>

            <div
              style={{
                backgroundColor: "yellow",
                borderRadius: "15px",
                width: "100%",
                maxWidth: "100%",
                margin: "10px 0",
                justifyItems: "center",
                padding: "5px",
                borderStyle: "dashed",
                borderColor: "blue",
                borderWidth: "5px",
                alignItems: "center",
              }}
            >
              <div>
                <Paragraph style={{ textAlign: "center", color: "red" }}>
                  Select a breed and we will give you many cute doggos
                </Paragraph>
              </div>

              <div
                style={{
                  width: "auto",
                  maxWidth: "95%",
                  display: "flex",
                  marginTop: "20px",
                  flexDirection: "column",
                }}
              >
                <select
                  name="Breeds"
                  onChange={(event) => {
                    setSelectedBreed(event.target.value);
                  }}
                  style={{
                    background: "linear-gradient(to bottom, lime, yellow)",
                    color: "magenta",
                    fontFamily: "'Comic Sans MS', 'Papyrus', cursive",
                    fontSize: "18px",
                    width: "auto",
                    maxWidth: "100%",
                    border: "5px ridge hotpink",
                    padding: "10px",
                    textShadow: "1px 1px 2px cyan",
                    boxShadow: "5px 5px 10px red",
                    letterSpacing: "3px",
                    transform: "rotate(-1deg)",
                  }}
                >
                  <option value="">None</option>
                  {breedList &&
                    Object.keys(breedList.message).map((breed) => (
                      <option key={breed} value={breed}>
                        {breed}
                      </option>
                    ))}
                </select>
                <Button
                  variant="contained"
                  disabled={!selectedBreed}
                  sx={{
                    color: "#ff006f",
                    backgroundColor: "#00ff37",
                    marginTop: "20px",
                    justifySelf: "center",
                    borderStyle: "ridge",
                    fontFamily: "'Comic Sans MS', 'Papyrus', cursive",
                    borderColor: "red",
                    borderWidth: "5px",
                    "&.Mui-disabled": {
                      bgcolor: "#84002c",
                      color: "#6a0132",
                      borderColor: "#560048",
                    },
                    ":hover": {
                      bgcolor: "#00801c",
                      color: "#960041",
                      borderColor: "#770000",
                    },
                  }}
                  onClick={() => handleGetRandomPicture(selectedBreed)}
                >
                  Random Doggo!
                </Button>

                <Button
                  title="Todas As Imagens"
                  variant="contained"
                  disabled={!selectedBreed}
                  sx={{
                    color: "#f6ff00",
                    backgroundColor: "#ff0000",
                    borderStyle: "ridge",
                    marginTop: "10px",
                    borderColor: "#00ff37",
                    fontFamily: "'Comic Sans MS', 'Papyrus', cursive",
                    borderWidth: "5px",
                    "&.Mui-disabled": {
                      bgcolor: "#84002c",
                      color: "#6a0132",
                      borderColor: "#560048",
                    },
                    ":hover": {
                      bgcolor: "#6c0000",
                      color: "#818500",
                      borderColor: "#006a17",
                    },
                  }}
                  onClick={() => handleGetPictures(selectedBreed)}
                >
                  Many Doggos!!!!!
                </Button>
              </div>
            </div>
          </Grid>

          <Grid
            item
            xs={3}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {Array.from({ length: 11 }).map((_, index) => (
              <img
                key={index}
                src={loading}
                alt="loading"
                style={{ width: "80px", margin: "10px 0" }}
              />
            ))}
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Home;
