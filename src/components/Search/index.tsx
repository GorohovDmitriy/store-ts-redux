import React, { useState, ChangeEvent, FormEvent, FC } from "react";
import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { IProduct } from "../../models/IProduct";
import { setSearchProduct } from "../../redux/actions/productAction";
import { useStyles } from "../../utils/useStyles";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "./Search.scss";

interface SearchProps {
  setResetSearch: React.Dispatch<React.SetStateAction<any>>;
}

const Search: FC<SearchProps> = React.memo(({ setResetSearch }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.apple);
  const [value, setValue] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const clearInput = () => {
    value !== "" && setValue("");
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
      setResetSearch(true);
    }
  };

  return (
    <Box className="search">
      <form onSubmit={handleSubmit} className="search__form">
        <TextField
          id="standard-search"
          label="Поиск"
          type="search"
          variant="outlined"
          onChange={handleChange}
          value={value}
          fullWidth
          className={classes.underline}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={clearInput} aria-label="delete">
                  <KeyboardBackspaceIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </form>
    </Box>
  );
});

export default Search;
