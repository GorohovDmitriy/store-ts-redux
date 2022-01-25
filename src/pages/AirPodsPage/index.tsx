import React from "react";
import air from "../../assets/image/airpods.webp";
import { Container, Grid } from "@mui/material";
import { useStyles } from "../../utils/useStyles";
import { RootState } from "../../redux/store";
import { IProduct } from "../../models/IProduct";
import { useSelector } from "react-redux";
import CardItem from "../../components/CardItem";

const AirPodsPage = React.memo(() => {
  const classes = useStyles();
  const products = useSelector((state: RootState) => state.products.apple);
  const airPods = products.filter(
    (product: IProduct) => product.category === "AirPods"
  );
  return (
    <Container className={classes.pages} fixed>
      <img className={classes.pageImage} src={air} alt="airpods" />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {airPods &&
          airPods.map((pods: IProduct) => (
            <Grid item xs={2} sm={4} md={4} key={pods.id}>
              <CardItem product={pods} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
});

AirPodsPage.displayName = "AirPodsPage";

export default AirPodsPage;
