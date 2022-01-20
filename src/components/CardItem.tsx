import React, { FC } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

interface CartItemProps {
  id: number;
  category: number;
  name: string;
  imageUrl: string;
  price: number;
}

const CardItem: FC<CartItemProps> = ({
  id,
  category,
  name,
  imageUrl,
  price,
}) => {
  return (
    <Card sx={{ maxWidth: 345, height: "100%" }}>
      <CardMedia component="img" image={imageUrl} alt={name} />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {name}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          ml: 1,
          mr: 1,
        }}
      >
        <Typography>{price} BYN</Typography>
        <Button variant="contained" sx={{ backgroundColor: "#231f20" }}>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export { CardItem };
