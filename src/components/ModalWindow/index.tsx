import React, { FC } from "react";
import delcOfNumber from "../../utils/delcOfNumber";
import { style } from "../../utils/useStyles";
import { Box, Typography, Modal, Grid, Button } from "@mui/material";
import { IProduct } from "../../models/IProduct";

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
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Grid container spacing={2}>
          <Grid item></Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h6" component="h2">
                  Оформление заказа
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {delcOfNumber(products.length)} {products.length}
                </Typography>
              </Grid>
              <Grid item>
                <Button onClick={handleClose} variant="contained">
                  Оформить
                </Button>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
                {totalPrice} BYN
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default ModalWindow;
