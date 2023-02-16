import { Grid } from "@mui/material";
import useFieldItem from "./useFieldItem";

const FieldItem = ({ data, row, column, setHoveredSquare }) => {
  const { isHovered, setIsHovered, height, heightBlock, toggleField } =
    useFieldItem({ data, row, column });
  return (
    <Grid
      ref={heightBlock}
      item
      xs={1}
      onMouseEnter={() => {
        setIsHovered(!isHovered);
        setHoveredSquare((prevState) => toggleField(prevState));
      }}
      sx={{
        backgroundColor: isHovered && "#28a9f4",
        cursor: "pointer",
        height,
      }}
    />
  );
};

export default FieldItem;
