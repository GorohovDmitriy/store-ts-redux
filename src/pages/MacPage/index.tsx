import React from "react";
import mac from "../../assets/image/mac.webp";
import { Container, Grid } from "@mui/material";
import { useStyles } from "../../utils/useStyles";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { IProduct } from "../../models/IProduct";
import CardItem from "../../components/CardItem";

const MacPage = React.memo(() => {
  const classes = useStyles();
  const products = useSelector((state: RootState) => state.products.apple);
  const macbook = products.filter(
    (product: IProduct) => product.category === "MacBook"
  );

  return (
    <Container className={classes.pages} fixed>
      <img className={classes.pageImage} src={mac} alt="Mac" />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {macbook &&
          macbook.map((mac: IProduct) => (
            <Grid item xs={2} sm={4} md={4} key={mac.id}>
              <CardItem product={mac} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
});

MacPage.displayName = "MacPage";

export default MacPage;
