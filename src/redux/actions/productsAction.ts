import { ThunkAction } from "redux-thunk";
import Store from "../../Api/Store";
import { IProduct } from "../../models/IProduct";
import { RootState } from "../store";
import { ProductAction, ProductEnum } from "../types";

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
    type: ProductEnum.GET_APPLE,
    payload: items,
  };
};

export const setLoading = (payload: boolean): ProductAction => {
  return {
    type: ProductEnum.SET_LOADING,
    payload,
  };
};

export const setError = (message: string): ProductAction => {
  return {
    type: ProductEnum.SET_ERROR,
    payload: message,
  };
};
