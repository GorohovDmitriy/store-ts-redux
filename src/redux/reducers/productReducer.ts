import { ProductAction, ProductActions, ProductState } from "../types";

const initialState: ProductState = {
  apple: [],
  isLoading: false,
  error: "",
  currentProduct: null,
  searchProduct: null,
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
        currentProduct: null,
        searchProduct: null,
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
    case ProductActions.SET_CURRENT_PRODUTC:
      return {
        ...state,
        currentProduct: action.payload,
      };
    case ProductActions.SET_SEARCH_PRODUCT:
      return {
        ...state,
        searchProduct: action.payload,
      };
    default:
      return state;
  }
}
