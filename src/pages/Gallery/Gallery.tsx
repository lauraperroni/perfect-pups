import { Button } from "@mui/material";
import Title from "../../components/Title/Title";
import { useNavigate } from "react-router-dom";

const Gallery = () => {
  const navigate = useNavigate();

  const handleNavigate = (route: string) => {
    navigate(`/${route}`);
  };

  return (
    <>
      <div>
        <div style={{ backgroundColor: "blue" }}>
          <Title titleText={"Gallery "} />
        </div>

        <div>
          <Button variant="contained" onClick={() => handleNavigate("home")}>
            Home
          </Button>
        </div>
      </div>
    </>
  );
};

export default Gallery;
