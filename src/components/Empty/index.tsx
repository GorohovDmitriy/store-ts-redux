import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { GlobalSvg } from "../../assets/svg";

const Empty = () => {
  return (
    <Container fixed>
      <Box className="empty">
        <Typography align="center" mt={5} component="div" variant="h3">
          Ваша корзина пустая
        </Typography>
        <Box className="empty__svg">
          <GlobalSvg id="empty" />
        </Box>
      </Box>
    </Container>
  );
};

export default Empty;
