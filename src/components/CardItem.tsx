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
    <Card sx={{ maxWidth: 345, height: 570 }}>
      <CardMedia component="img" image={imageUrl} alt={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{price} BYN</Button>
        <Button size="small">Add Cart</Button>
      </CardActions>
    </Card>
  );
};

export { CardItem };
