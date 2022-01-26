import React, { useEffect } from "react";
import iphone from "../../assets/image/iphone.webp";
import { Container } from "@mui/material";
import { useStyles } from "../../utils/useStyles";
import { RootState } from "../../redux/store";
import { IProduct } from "../../models/IProduct";
import { useDispatch, useSelector } from "react-redux";
import ItemComponent from "../../components/ItemComponent";
import { fetchProduct } from "../../redux/actions/productAction";

const IphonePage = React.memo(() => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.apple);
  const iPhone = products.filter(
    (product: IProduct) => product.category === "iPhone"
  );

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  return (
    <Container className={classes.pages} fixed>
      <img className={classes.pageImage} src={iphone} alt="iPhone" />
      <ItemComponent products={iPhone} />
    </Container>
  );
});

IphonePage.displayName = "IphonePage";

export default IphonePage;
