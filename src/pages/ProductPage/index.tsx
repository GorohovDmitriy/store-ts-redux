import React, { useEffect } from "react";
import {
  ButtonBase,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
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
import { setCurrentProduct } from "../../redux/actions/productAction";

const ProductPage = React.memo(() => {
  const { id } = useParams();
  const classes = useStyles();
  const dispatch = useDispatch();
  const products: IProduct[] = useSelector(
    (state: RootState) => state.products.apple
  );
  const [productId] = products.filter(
    (product: IProduct) => product.id === Number(id)
  );
  const productsInCart = useSelector(
    (state: RootState) => state.cart.productInCart
  );
  const isProductInCart = productsInCart.some(
    (item: IProduct) => item.id === Number(id)
  );

  useEffect(() => {
    dispatch(setCurrentProduct(productId));
  }, []);

  const handleClick = () => {
    if (productId) {
      dispatch(
        isProductInCart
          ? removeFromCart(productId.id)
          : setProductInCart(productId)
      );
    }
  };

  return (
    <Container className={classes.homeContainer} fixed>
      {productId && (
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className="product-page">
              <CardMedia
                component="img"
                alt="green iguana"
                image={productId.imageUrl}
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  {productId.name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {productId.category}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {productId.description}
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
                {productId.price} BYN
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
