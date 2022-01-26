import React, { useEffect } from "react";
import air from "../../assets/image/airpods.webp";
import { Container } from "@mui/material";
import { useStyles } from "../../utils/useStyles";
import { RootState } from "../../redux/store";
import { IProduct } from "../../models/IProduct";
import { useSelector, useDispatch } from "react-redux";
import ItemComponent from "../../components/ItemComponent";
import { fetchProduct } from "../../redux/actions/productAction";

const AirPodsPage = React.memo(() => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.apple);
  const airPods = products.filter(
    (product: IProduct) => product.category === "AirPods"
  );

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  return (
    <Container className={classes.pages} fixed>
      <img className={classes.pageImage} src={air} alt="airpods" />
      <ItemComponent products={airPods} />
    </Container>
  );
});

AirPodsPage.displayName = "AirPodsPage";

export default AirPodsPage;
