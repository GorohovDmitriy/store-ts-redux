import React from "react";
import iphone from "../../assets/image/iphone.webp";
import { Container, Grid } from "@mui/material";
import { useStyles } from "../../utils/useStyles";
import { RootState } from "../../redux/store";
import { IProduct } from "../../models/IProduct";
import { useSelector } from "react-redux";
import CardItem from "../../components/CardItem";

const IphonePage = React.memo(() => {
  const classes = useStyles();
  const products = useSelector((state: RootState) => state.products.apple);
  const iPhone = products.filter(
    (product: IProduct) => product.category === "iPhone"
  );

  return (
    <Container className={classes.pages} fixed>
      <img className={classes.pageImage} src={iphone} alt="iPhone" />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {iPhone &&
          iPhone.map((phone: IProduct) => (
            <Grid item xs={2} sm={4} md={4} key={phone.id}>
              <CardItem product={phone} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
});

IphonePage.displayName = "IphonePage";

export default IphonePage;
