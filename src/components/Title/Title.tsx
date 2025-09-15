import { SupaDupaCoolTitle } from "./styles.ts";

interface TitleProps {
  titleText: string;
  color?: string;
  fontSize?: string;
  align?: "left" | "center" | "right";
  strokeColor?: string;
  strokeWidth?: string;
  className?: string;
}

const Title: React.FC<TitleProps> = ({
  titleText,
  color,
  fontSize,
  align = "center",
  strokeColor,
  strokeWidth,
  className,
}) => {
  return (
    <SupaDupaCoolTitle
      color={color}
      fontSize={fontSize}
      align={align}
      strokeColor={strokeColor}
      strokeWidth={strokeWidth}
      className={className}
    >
      {titleText}
    </SupaDupaCoolTitle>
  );
};

export default Title;
