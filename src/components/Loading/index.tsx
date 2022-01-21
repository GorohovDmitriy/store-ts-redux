import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import { useStyles } from "../../utils/useStyles";

const Loading = () => {
  const classes = useStyles();
  return (
    <Container>
      <Box className={classes.loading}>
        <CircularProgress size={150} />
      </Box>
    </Container>
  );
};

export default Loading;
