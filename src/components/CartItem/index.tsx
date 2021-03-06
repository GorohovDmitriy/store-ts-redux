import React, { FC, useCallback } from "react";
import { IProduct } from "../../models/IProduct";
import { ButtonBase, Grid, Paper, Typography, CardMedia } from "@mui/material";
import { removeFromCart } from "../../redux/actions/cartAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentProduct } from "../../redux/actions/productAction";
import "./CartItem.scss";

interface CartItemProps {
  product: IProduct;
}

const CartItem: FC<CartItemProps> = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const removeProduct = useCallback(() => {
    dispatch(removeFromCart(product.id));
  }, [dispatch, product.id]);

  const selectProduct = useCallback(() => {
    dispatch(setCurrentProduct(product));
    navigate(`/app/${product.id}`);
  }, [dispatch, navigate, product]);

  return (
    <Paper className="cart__item">
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase className="cart__button-base">
            <CardMedia
              onClick={selectProduct}
              component="img"
              image={product.imageUrl}
              alt={product.name}
            />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.category}
              </Typography>
              <Typography
                gutterBottom
                variant="caption"
                color="tesxtSecondary"
                component="div"
              >
                {product.description}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                onClick={removeProduct}
                className="cart__remove"
                variant="body2"
                component="span"
              >
                ??????????????
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              {product.price} BYN
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CartItem;
