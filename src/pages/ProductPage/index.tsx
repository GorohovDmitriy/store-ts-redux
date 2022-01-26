import React from "react";
import {
  ButtonBase,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import ButtonCart from "../../components/ButtonCart";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useStyles } from "../../utils/useStyles";
import { IProduct } from "../../models/IProduct";
import {
  removeFromCart,
  setProductInCart,
} from "../../redux/actions/cartAction";
import "./ProductPage.scss";

const ProductPage = React.memo(() => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const productCurrent = useSelector(
    (state: RootState) => state.products.currentProduct
  );
  const products = useSelector((state: RootState) => state.cart.productInCart);
  const isProductInCart = products.some(
    (item: IProduct) => item.id === productCurrent?.id
  );

  const handleClick = () => {
    if (productCurrent) {
      dispatch(
        isProductInCart
          ? removeFromCart(productCurrent.id)
          : setProductInCart(productCurrent)
      );
    }
  };

  return (
    <Container className={classes.homeContainer} fixed>
      {productCurrent && (
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className="product-page">
              <CardMedia
                component="img"
                alt="green iguana"
                image={productCurrent.imageUrl}
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  {productCurrent.name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {productCurrent.category}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {productCurrent.description}
                </Typography>
              </Grid>
              <Grid item>
                <ButtonCart
                  handleClick={handleClick}
                  type={isProductInCart ? "secondary" : "primary"}
                >
                  {isProductInCart ? "Удалить" : "В корзину"}
                </ButtonCart>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
                {productCurrent.price} BYN
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Container>
  );
});

ProductPage.displayName = "ProductPage";

export default ProductPage;
