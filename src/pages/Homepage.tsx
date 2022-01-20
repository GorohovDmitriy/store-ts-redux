import React, { FC, useEffect } from "react";
import { getApple } from "../redux/actions/appleAction";
import { CardItem } from "../components/CardItem";
import { Container, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { IProduct } from "../models/IProduct";

const Homepage: FC = () => {
  const dispatch = useDispatch();
  const products: IProduct[] = useSelector(
    (state: RootState) => state.apple.apple
  );

  useEffect(() => {
    dispatch(getApple());
  }, [dispatch]);
  return (
    <Container sx={{ marginTop: 2 }} fixed>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {products &&
          products.map((product: IProduct) => (
            <Grid item xs={2} sm={4} md={4} key={product.id}>
              <CardItem
                id={product.id}
                category={product.category}
                imageUrl={product.imageUrl}
                name={product.name}
                price={product.price}
              />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export { Homepage };
