import React, { FC } from "react";
import { ButtonGroup, IconButton, Box } from "@mui/material";
import SortIcon from "@mui/icons-material/Sort";
import { useStyles } from "../../utils/useStyles";
import Search from '../Search'

interface SortingProps {
  sortPrice: () => void;
}

const Sorting: FC<SortingProps> = ({ sortPrice }) => {
  const classes = useStyles();
  return (
    <Box className={classes.sortBox}>
      <ButtonGroup className={classes.sortGroup}>
        <IconButton onClick={sortPrice}>
          <SortIcon />
        </IconButton>
        Сортировка по цене
      </ButtonGroup>
      <Search />
    </Box>
  );
};

export default Sorting;
