
import { ProductAction, ProductEnum, ProductState } from "../types";

const initialState: ProductState = {
  apple: [],
  isLoading: false,
  error: ''
};

export default function productReducer(
  state = initialState,
  action: ProductAction
): ProductState {
  switch (action.type) {
    case ProductEnum.GET_APPLE:
      return {
        apple: action.payload,
        isLoading: false,
        error: ''
      };
    case ProductEnum.SET_LOADING:
      return {
          ...state,
          isLoading: action.payload
      }
    case ProductEnum.SET_ERROR:
        return {
            ...state,
            error: action.payload
        }
    default:
      return state;
  }
}
