import React, { FC, useCallback } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import ButtonCart from "../ButtonCart";
import { useHistory } from "react-router-dom";
import { useStyles } from "../../utils/useStyles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  setProductInCart,
  removeFromCart,
} from "../../redux/actions/cartAction";
import { IProduct } from "../../models/IProduct";
import { setCurrentProduct } from "../../redux/actions/productAction";

interface CardItemProps {
  product: IProduct;
}

const CardItem: FC<CardItemProps> = React.memo(({ product }) => {
  const classes = useStyles();
  const navigate = useHistory();
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.cart.productInCart);

  const isProductInCart = products.some(
    (item: IProduct) => item.id === product.id
  );

  const handleClick = () => {
    dispatch(
      isProductInCart ? removeFromCart(product.id) : setProductInCart(product)
    );
  };

  const selectProduct = useCallback(() => {
    dispatch(setCurrentProduct(product));
    navigate.push(`/app/${product.id}`);
  }, [dispatch, product, navigate]);

  return (
    <Card className={classes.cartContainer}>
      <CardMedia
        onClick={selectProduct}
        component="img"
        image={product.imageUrl}
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {product.name}
        </Typography>
      </CardContent>
      <CardActions className={classes.cartAction}>
        <Typography>{product.price} BYN</Typography>
        <ButtonCart
          handleClick={handleClick}
          type={isProductInCart ? "secondary" : "primary"}
        >
          {isProductInCart ? "Удалить из корзины" : "В корзину"}
        </ButtonCart>
      </CardActions>
    </Card>
  );
});

CardItem.displayName = "CardItem";

export default CardItem;
