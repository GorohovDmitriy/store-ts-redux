import React, { FC } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import ButtonCart from "../ButtonCart";
import { useStyles } from "../../utils/useStyles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  setProductInCart,
  removeFromCart,
} from "../../redux/actions/cartAction";
import { IProduct } from "../../models/IProduct";

interface CartItemProps {
  product: IProduct;
}

const CardItem: FC<CartItemProps> = React.memo(({ product }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.cart.productInCart);

  const isProductInCart = products.some(
    (item: IProduct) => item.id === product.id
  );
  console.log(isProductInCart);

  const handleClick = () => {
    if (isProductInCart) {
      dispatch(removeFromCart(product.id));
    } else {
      dispatch(setProductInCart(product));
    }
  };

  return (
    <Card className={classes.cartContainer}>
      <CardMedia component="img" image={product.imageUrl} alt={product.name} />
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
          {isProductInCart ? "Remove from cart" : "Add to cart"}
        </ButtonCart>
      </CardActions>
    </Card>
  );
});

CardItem.displayName = "CardItem";

export default CardItem;
