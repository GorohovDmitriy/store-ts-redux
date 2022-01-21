import React, { FC } from "react";
import { ButtonGroup, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import SortIcon from "@mui/icons-material/Sort";
import { useStyles } from "../../utils/useStyles";

interface SortingProps {
  sortPrice: () => void;
}

const Sorting: FC<SortingProps> = ({ sortPrice }) => {
  const classes = useStyles();
  return (
    <Box className={classes.sortBox}>
      <ButtonGroup className={classes.sortGroup}>
        <IconButton onClick={sortPrice} sx={{ mr: 2 }}>
          <SortIcon />
        </IconButton>
        Сортировка по цене
      </ButtonGroup>
    </Box>
  );
};

export { Sorting };
