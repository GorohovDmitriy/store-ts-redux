import React, { FC } from "react";
import delcOfNumber from "../../utils/delcOfNumber";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  DialogProps,
} from "@mui/material";
import { IProduct } from "../../models/IProduct";
import CartItem from "../CartItem";

interface ModalProps {
  open: boolean;
  handleClose: () => void;
  products: IProduct[];
  totalPrice: number;
}

const ModalWindow: FC<ModalProps> = ({
  open,
  handleClose,
  products,
  totalPrice,
}) => {
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState<DialogProps["maxWidth"]>("sm");

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Оформление заказа</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {delcOfNumber(products.length)} {products.length} на сумму{" "}
          {totalPrice}
          {products.map((product: IProduct) => (
            <CartItem key={product.id} product={product} />
          ))}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={handleClose}>
          Оформить
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalWindow;
