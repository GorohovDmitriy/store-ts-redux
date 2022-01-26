import React, { useEffect } from "react";
import mac from "../../assets/image/mac.webp";
import { Container } from "@mui/material";
import { useStyles } from "../../utils/useStyles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { IProduct } from "../../models/IProduct";
import ItemComponent from "../../components/ItemComponent";
import { fetchProduct } from "../../redux/actions/productAction";

const MacPage = React.memo(() => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.apple);
  const macbook = products.filter(
    (product: IProduct) => product.category === "MacBook"
  );

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  return (
    <Container className={classes.pages} fixed>
      <img className={classes.pageImage} src={mac} alt="Mac" />
      <ItemComponent products={macbook} />
    </Container>
  );
});

MacPage.displayName = "MacPage";

export default MacPage;
