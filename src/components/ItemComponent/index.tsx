import React, { FC } from "react";
import CardItem from "../CardItem";
import { IProduct } from "../../models/IProduct";
import { Grid } from "@mui/material";

interface ItemComponentProps {
  product: IProduct[];
}

const ItemComponent: FC<ItemComponentProps> = ({ product }) => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {product &&
        product.map((prod: IProduct) => (
          <Grid item xs={2} sm={4} md={4} key={prod.id}>
            <CardItem product={prod} />
          </Grid>
        ))}
    </Grid>
  );
};

export default ItemComponent;
