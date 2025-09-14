import { Button } from "@mui/material";

interface ButtonProps {
  buttonText: string;
}

const StyledButton: React.FC<ButtonProps> = ({ buttonText }) => {
  return (
    <>
      <Button
        title={buttonText}
        style={{
          backgroundColor: "purple",
          color: "white",
          borderRadius: "50%",
        }}
      />
    </>
  );
};
export default StyledButton;
