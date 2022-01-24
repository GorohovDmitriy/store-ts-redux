import { ProductAction, ProductActions } from "./../types";
import { IProduct } from "../../models/IProduct";

export const setProductInCart = (product: IProduct): ProductAction => {
  return {
    type: ProductActions.ADD_TO_CART,
    payload: product,
  };
};
export const removeFromCart = (id: number): ProductAction => {
  return {
    type: ProductActions.REMOVE_FROM_CART,
    payload: id,
  };
};
