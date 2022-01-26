import React, { FC, useCallback, useState } from "react";
import { ButtonGroup, IconButton, Box, Button } from "@mui/material";
import { useStyles } from "../../utils/useStyles";
import { fetchProduct } from "../../redux/actions/productAction";
import { useDispatch } from "react-redux";
import SortIcon from "@mui/icons-material/Sort";
import Search from "../Search";

interface SortingProps {
  sortPrice: () => void;
}

const Sorting: FC<SortingProps> = ({ sortPrice }) => {
  const [resetSearch, setResetSearch] = useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleClick = () => {
    setResetSearch(false);
    dispatch(fetchProduct());
  };

  return (
    <Box className={classes.sortBox}>
      <ButtonGroup className={classes.sortGroup}>
        <IconButton onClick={sortPrice}>
          <SortIcon />
        </IconButton>
        Сортировка по цене
      </ButtonGroup>
      {resetSearch && <Button onClick={handleClick}>Вернуться назад</Button>}
      <Search setResetSearch={setResetSearch} />
    </Box>
  );
};

export default Sorting;
