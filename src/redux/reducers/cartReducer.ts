import { IProduct } from "../../models/IProduct";
import { CartState, ProductAction, ProductActions } from "./../types";

const initialState: CartState = {
  productInCart: [],
};

export default function cartReducer(
  state = initialState,
  action: ProductAction
): CartState {
  switch (action.type) {
    case ProductActions.ADD_TO_CART:
      return {
        ...state,
        productInCart: [...state.productInCart, action.payload],
      };
    case ProductActions.REMOVE_FROM_CART:
        return {
            ...state,
            productInCart: state.productInCart.filter((product: IProduct) => product.id !== action.payload)
        }
    default:
      return state;
  }
}
