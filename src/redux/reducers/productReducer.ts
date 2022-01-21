import { ProductAction, ProductActions, ProductState } from "../types";

const initialState: ProductState = {
  apple: [],
  isLoading: false,
  error: "",
};

export default function productReducer(
  state = initialState,
  action: ProductAction
): ProductState {
  switch (action.type) {
    case ProductActions.GET_PRODUCT:
      return {
        apple: action.payload,
        isLoading: false,
        error: "",
      };
    case ProductActions.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case ProductActions.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
