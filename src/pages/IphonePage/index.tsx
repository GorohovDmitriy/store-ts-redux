import React, { useEffect } from "react";
import iphone from "../../assets/image/iphone.webp";
import { Container } from "@mui/material";
import { useStyles } from "../../utils/useStyles";
import { RootState } from "../../redux/store";
import { IProduct } from "../../models/IProduct";
import { useSelector } from "react-redux";
import ItemComponent from "../../components/ItemComponent";

const IphonePage = React.memo(() => {
  const classes = useStyles();
  const products = useSelector((state: RootState) => state.products.apple);
  const iPhone = products.filter(
    (product: IProduct) => product.category === "iPhone"
  );

  return (
    <Container className={classes.pages} fixed>
      <img className={classes.pageImage} src={iphone} alt="iPhone" />
      <ItemComponent products={iPhone} />
    </Container>
  );
});

IphonePage.displayName = "IphonePage";

export default IphonePage;
