import React, { FC } from "react";
import { ButtonGroup, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import SortIcon from "@mui/icons-material/Sort";

interface SortingProps {
  sortPrice: () => void;
}

const Sorting: FC<SortingProps> = ({ sortPrice }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <ButtonGroup
        sx={{
          mb: 4,
          mr: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <IconButton onClick={sortPrice} sx={{ mr: 2 }}>
          <SortIcon />
        </IconButton>
        Сортировка по цене
      </ButtonGroup>
    </Box>
  );
};

export { Sorting };
