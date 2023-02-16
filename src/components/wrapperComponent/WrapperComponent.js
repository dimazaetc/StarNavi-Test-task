import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button, Grid, Typography } from "@mui/material";
import { FieldBlock } from "../fieldBlock";
import useWrapperComponent from "./useWrapperComponent";

const WrapperComponent = ({ data }) => {
  const {
    hoveredSquare,
    handleChange,
    mode,
    setHoveredSquare,
    selectedMode,
    selectMode,
  } = useWrapperComponent();
  return (
    <Grid container columnSpacing={{ md: 2 }} sx={{ width: "100%" }}>
      <Grid item xs={6}>
        <Box sx={{ display: "flex", padding: "20px" }}>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Pick Mode</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={mode}
              sx={{ width: 300 }}
              label="mode"
              onChange={handleChange}
            >
              {data.map((item) => (
                <MenuItem key={item.name} value={item}>
                  {item?.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button
            sx={{ marginLeft: "10px" }}
            variant="contained"
            onClick={selectMode}
          >
            Start
          </Button>
        </Box>
        {selectedMode && (
          <FieldBlock setHoveredSquare={setHoveredSquare} data={selectedMode} />
        )}
      </Grid>
      <Grid item xs={6}>
        <Box sx={{ padding: "20px" }}>
          <Typography sx={{ fontSize: 36, fontWeight: "bold" }}>
            Hover field{" "}
          </Typography>
          <Box sx={{ height: "400px", overflowY: "scroll" }}>
            {hoveredSquare.map((item) => (
              <Box
                key={`${item.row}${item.column}`}
                sx={{
                  padding: "15px",
                  margin: "5px",
                  backgroundColor: "#fbf8e3",
                  border: "1px solid #fbf1d6",
                }}
              >
                row {item.row} / column {item.column}
              </Box>
            ))}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default WrapperComponent;
