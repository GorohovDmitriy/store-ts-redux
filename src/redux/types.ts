import { IProduct } from "../models/IProduct";

export enum ProductEnum {
  GET_APPLE = "GET_APPLE",
  SET_LOADING = "SET_LOADING",
  ADD_TO_CART = "ADD_TO_CART",
  SET_ERROR = 'SET_ERROR'
}

export interface ProductState {
  apple: IProduct[];
  isLoading: boolean;
  error: string
}

interface GetProductAction {
  type: ProductEnum.GET_APPLE;
  payload: IProduct[];
}

interface AddToCartAction {
  type: ProductEnum.ADD_TO_CART;
  payload: IProduct;
}

interface SetLoadingAction {
  type: typeof ProductEnum.SET_LOADING;
  payload: boolean
}

interface SetErrorAction {
    type: typeof ProductEnum.SET_ERROR
    payload: string
}

export type ProductAction =
  | GetProductAction
  | AddToCartAction
  | SetLoadingAction
  | SetErrorAction;
