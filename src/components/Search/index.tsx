import React, { useState, ChangeEvent, FormEvent, FC } from "react";
import { Box, InputBase } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { IProduct } from "../../models/IProduct";
import { setSearchProduct } from "../../redux/actions/productAction";
import { useStyles } from "../../utils/useStyles";
import "./Search.scss";

const Search: FC = React.memo(() => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.apple);
  const [value, setValue] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchItem = products.filter((product: IProduct) =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );
    if (value === "") {
      alert("Поле не может быть пустым!!!");
    } else {
      dispatch(setSearchProduct(searchItem));
      setValue("");
    }
  };

  return (
    <Box className="search">
      <form onSubmit={handleSubmit} className="search__form">
        <InputBase
          value={value}
          onChange={handleChange}
          placeholder="Поиск"
          className={classes.inputBase}
          fullWidth
        />
      </form>
    </Box>
  );
});

export default Search;
