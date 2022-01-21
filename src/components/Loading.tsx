import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";

export default function CircularIndeterminate() {
  return (
    <Container>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center", mt: 15 }}
      >
        <CircularProgress size={150} />
      </Box>
    </Container>
  );
}
