import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { FieldItem } from "../fieldItem";

export default function FieldBlock({ data, setHoveredSquare }) {
  return (
    <Box sx={{ flexGrow: 1, marginTop: "20px" }}>
      <Grid
        sx={{
          "--Grid-borderWidth": "1px",
          borderTop: "var(--Grid-borderWidth) solid",
          borderColor: "black",
          "& > div": {
            borderBottom: "var(--Grid-borderWidth) solid",
            borderColor: "black",
          },
        }}
        container
      >
        {Array.from(Array(data.field)).map((_, indexRow) => (
          <Grid
            key={indexRow}
            sx={{
              "--Grid-borderWidth": "1px",
              borderLeft: "var(--Grid-borderWidth) solid",
              borderColor: "black",
              "& > div": {
                borderRight: "var(--Grid-borderWidth) solid",
                borderColor: "black",
              },
            }}
            container
            columns={data.field}
          >
            {Array.from(Array(data.field)).map((_, indexColumn) => (
              <FieldItem
                key={indexColumn}
                setHoveredSquare={setHoveredSquare}
                column={indexColumn + 1}
                row={indexRow + 1}
                data={data}
              />
            ))}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
