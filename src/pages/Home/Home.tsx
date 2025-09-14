import { Button, MenuItem, Select } from "@mui/material";
import Title from "../../components/Title/Title";
import { useEffect, useState } from "react";
import { dogsEndpoints } from "../../api/endpoints/dog.endpoints";
import type { IBreedsList } from "../../types";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [selectedBreed, setSelectedBreed] = useState<string>("");
  const [breedList, setBreedList] = useState<IBreedsList>();
  const dogsApi = new dogsEndpoints();
  const navigate = useNavigate();

  const handleGetRandomPicture = async (selectedBreed: string) => {
    try {
      const houndImages = await dogsApi.getRandomByBreed(selectedBreed);
      console.log(houndImages);
    } catch {
      alert("erro");
    }
  };

  const handleGetPictures = async (selectedBreed: string) => {
    try {
      const houndImages = await dogsApi.getAllByBreed(selectedBreed);
      console.log(houndImages);
    } catch {
      alert("erro");
    }
  };

  async function loadData() {
    const breeds = await dogsApi.getBreedList();
    setBreedList(breeds);
    console.log("Raças disponíveis:", breeds.message);
  }

  const handleNavigate = (route: string) => {
    navigate(`/${route}`);
  };

  useEffect(() => {
    if (!breedList) loadData();
  });

  return (
    <>
      <div>
        <div style={{ backgroundColor: "blue" }}>
          <Title titleText={"Home"} />
        </div>

        <div style={{ backgroundColor: "yellow" }}>
          <Select
            value={selectedBreed}
            label="Age"
            onChange={(event) => {
              setSelectedBreed(event.target.value);
            }}
          >
            {breedList &&
              Object.keys(breedList.message).map((breed) => (
                <MenuItem key={breed} value={breed}>
                  {breed}
                </MenuItem>
              ))}
          </Select>
          <div>
            <Button
              title="Imagem Aleatória"
              variant="contained"
              disabled={!selectedBreed}
              onClick={() => handleGetRandomPicture(selectedBreed)}
            >
              Imagem Aleatória
            </Button>
            <Button
              title="Todas As Imagens"
              variant="contained"
              disabled={!selectedBreed}
              onClick={() => handleGetPictures(selectedBreed)}
            >
              Todas As Imagens
            </Button>
          </div>
          <div>
            <Button
              variant="contained"
              onClick={() => handleNavigate("gallery")}
            >
              Gallery
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
