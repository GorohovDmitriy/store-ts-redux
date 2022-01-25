import React from "react";
import mac from "../../assets/image/mac.webp";
import { Container } from "@mui/material";
import { useStyles } from "../../utils/useStyles";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { IProduct } from "../../models/IProduct";
import ItemComponent from "../../components/ItemComponent";

const MacPage = React.memo(() => {
  const classes = useStyles();
  const products = useSelector((state: RootState) => state.products.apple);
  const macbook = products.filter(
    (product: IProduct) => product.category === "MacBook"
  );

  return (
    <Container className={classes.pages} fixed>
      <img className={classes.pageImage} src={mac} alt="Mac" />
      <ItemComponent products={macbook} />
    </Container>
  );
});

MacPage.displayName = "MacPage";

export default MacPage;
