import { ThunkAction } from "redux-thunk";
import Store from "../../Api/Store";
import { IProduct } from "../../models/IProduct";
import { RootState } from "../store";
import { ProductAction, ProductActions } from "../types";

export const fetchProduct = (): ThunkAction<
  void,
  RootState,
  null,
  ProductAction
> => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await Store.getProduct();
      dispatch(setProduct(response.data));
    } catch (e) {
      dispatch(setError("Data did not come from the server"));
    }
  };
};

export const setProduct = (items: IProduct[]): ProductAction => {
  return {
    type: ProductActions.GET_PRODUCT,
    payload: items,
  };
};

export const setLoading = (payload: boolean): ProductAction => {
  return {
    type: ProductActions.SET_LOADING,
    payload,
  };
};

export const setError = (message: string): ProductAction => {
  return {
    type: ProductActions.SET_ERROR,
    payload: message,
  };
};
