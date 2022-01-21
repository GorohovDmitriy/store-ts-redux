import React, { FC, useEffect } from "react";
import { Container, Grid } from "@mui/material";
import { useStyles } from "../../utils/useStyles";

import CardItem from "../../components/CardItem";
import Sorting from "../../components/Sorting";
import Loading from "../../components/Loading";

import {
  fetchProduct,
  setLoading,
  setProduct,
} from "../../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { IProduct } from "../../models/IProduct";

const HomePage: FC = React.memo(() => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const products: IProduct[] = useSelector(
    (state: RootState) => state.products.apple
  );
  const isLoading = useSelector((state: RootState) => state.products.isLoading);

  const sortPrice = () => {
    dispatch(setLoading(true));
    const sortProduct = products.sort(
      (a, b) => Number(b.price) - Number(a.price)
    );
    dispatch(setProduct(sortProduct));
    dispatch(setLoading(false));
  };

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  return (
    <Container className={classes.homeContainer} fixed>
      <Sorting sortPrice={sortPrice} />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {isLoading ? (
          <Loading />
        ) : (
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
          ))
        )}
      </Grid>
    </Container>
  );
});

HomePage.displayName = "HomePage";

export default HomePage;
