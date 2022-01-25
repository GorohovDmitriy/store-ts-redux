import React, { FC } from "react";
import CardItem from "../CardItem";
import { IProduct } from "../../models/IProduct";
import { Grid } from "@mui/material";

interface ItemComponentProps {
  products: IProduct[];
}

const ItemComponent: FC<ItemComponentProps> = ({ products }) => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {products &&
        products.map((product: IProduct) => (
          <Grid item xs={2} sm={4} md={4} key={product.id}>
            <CardItem product={product} />
          </Grid>
        ))}
    </Grid>
  );
};

export default ItemComponent;
