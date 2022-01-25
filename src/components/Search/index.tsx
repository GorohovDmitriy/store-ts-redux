import React, { useState, ChangeEvent, FormEvent } from "react";
import { Box, TextField } from "@mui/material";
import "./Search.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { IProduct } from "../../models/IProduct";
import { setSearchProduct } from "../../redux/actions/productAction";

const Search = () => {
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
        <TextField
          value={value}
          type="search"
          onChange={handleChange}
          fullWidth
          id="demo-helper-text-aligned-no-helper"
          label="Поиск по названию"
        />
      </form>
    </Box>
  );
};

export default Search;
