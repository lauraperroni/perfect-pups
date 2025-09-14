
interface TitleProps {
  titleText: string;
}

const Home: React.FC<TitleProps> = ({ titleText }) => {
  return (
    <>
      <h1 style={{ color: "pink" }}>{titleText}</h1>
    </>
  );
};
export default Home;
