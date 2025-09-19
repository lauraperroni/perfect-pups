import Grid from "@mui/material/Grid";
import Title from "../../components/Title/Title";
import type { TAllDogImages, TRandomDogImage } from "../../types";
import { PageTypeEnum } from "../../types";
import blessDog from "../../assets/bless-dog.gif";
import { Paragraph } from "../Home/styles";
import loading from "../../assets/loading.gif";

interface IGallery {
  setPageSection: React.Dispatch<React.SetStateAction<"home" | "gallery">>;
  randomDogImage: TRandomDogImage | null;
  allDogImages: TAllDogImages | null;
  setRandomDogImage: React.Dispatch<
    React.SetStateAction<TRandomDogImage | null>
  >;
  setAllDogImages: React.Dispatch<React.SetStateAction<TAllDogImages | null>>;
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  pageType: PageTypeEnum | null;
  setPageType: (value: PageTypeEnum | null) => void;
}

const borderColors = [
  "red",
  "blue",
  "green",
  "purple",
  "orange",
  "pink",
  "cyan",
  "magenta",
  "lime",
  "gold",
];

const Gallery: React.FC<IGallery> = ({
  setPageSection,
  randomDogImage,
  allDogImages,
  setRandomDogImage,
  setAllDogImages,
  pageType,
  setPageType,
  isLoading,
}) => {
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
          <Title strokeColor="black" strokeWidth="3px" titleText={"LOADING"} />
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
                <Paragraph
                  onClick={() => {
                    setPageSection("home");
                    setAllDogImages({ message: [], status: "" });
                    setRandomDogImage({ message: "", status: "" });
                    setPageType(PageTypeEnum.NONE);
                  }}
                >
                  Home
                </Paragraph>
              </div>
            </div>

            <div
              style={{
                backgroundColor: "yellow",
                borderRadius: "15px",
                width: "100%",
                margin: "10px 0",
                padding: "5px",
                borderStyle: "dashed",
                borderColor: "blue",
                borderWidth: "5px",
                textAlign: "center",
              }}
            >
              {pageType === PageTypeEnum.RANDOM && randomDogImage && (
                <div>
                  <Title titleText={"HERES YOUR PUPPY :3"} fontSize="28px" />
                  <img
                    src={randomDogImage.message}
                    style={{
                      width: "300px",
                      height: "300px",
                      objectFit: "cover",
                      borderRadius: "8px",
                      border: `5px groove #d900ff`,
                    }}
                  />
                </div>
              )}

              {pageType === PageTypeEnum.ALL && allDogImages && (
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "10px",
                  }}
                >
                  {allDogImages.message.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt="doggo"
                      style={{
                        width: "150px",
                        height: "150px",
                        objectFit: "cover",
                        borderRadius: "8px",
                        border: `5px solid ${
                          borderColors[index % borderColors.length]
                        }`,
                      }}
                    />
                  ))}
                </div>
              )}
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

export default Gallery;
