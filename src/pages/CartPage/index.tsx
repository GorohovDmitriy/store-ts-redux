import React, { FC } from "react";
import { Button, Container, Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { IProduct } from "../../models/IProduct";
import { calcTotalPrice } from "../../utils/calcTotalPrice";
import CartItem from "../../components/CartItem";
import Empty from "../../components/Empty";

const CartPage: FC = React.memo(() => {
  const products: IProduct[] = useSelector(
    (state: RootState) => state.cart.productInCart
  );
  const totalPrice = calcTotalPrice(products);

  if (products.length < 1) {
    return <Empty />;
  }

  return (
    <Container fixed>
      <Box className="cart__page">
        <Typography variant="overline" display="block" gutterBottom>
          amount in cart {totalPrice} BYN {products.length} products
        </Typography>
        <Button variant="contained">to Order</Button>
      </Box>
      {products &&
        products.map((item: IProduct) => (
          <CartItem key={item.id} product={item} />
        ))}
    </Container>
  );
});

CartPage.displayName = "CartPage";

export default CartPage;
