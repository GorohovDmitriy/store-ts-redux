import React, { FC } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import { useStyles } from "../../utils/useStyles";

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
  const classes = useStyles();
  return (
    <Card className={classes.cartContainer}>
      <CardMedia component="img" image={imageUrl} alt={name} />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {name}
        </Typography>
      </CardContent>
      <CardActions className={classes.cartAction}>
        <Typography>{price} BYN</Typography>
        <Button variant="contained" color="primary">
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardItem;
