import { IProduct } from "./../models/IProduct";

export enum ProductActions {
  GET_PRODUCT = "GET_PRODUCT",
  SET_LOADING = "SET_LOADING",
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
  SET_ERROR = "SET_ERROR",
  SET_CURRENT_PRODUTC = "SET_CURRENT_PRODUTC",
  SET_SEARCH_PRODUCT = "SET_SEARCH_PRODUCT",
}

export interface ProductState {
  apple: IProduct[];
  isLoading: boolean;
  error: string;
  currentProduct: IProduct | null;
  searchProduct: IProduct[] | null;
}

export interface CartState {
  productInCart: IProduct[];
}

interface SetSearchProduct {
  type: ProductActions.SET_SEARCH_PRODUCT;
  payload: IProduct[];
}

interface GetProductAction {
  type: ProductActions.GET_PRODUCT;
  payload: IProduct[];
}

interface AddToCartAction {
  type: ProductActions.ADD_TO_CART;
  payload: IProduct;
}

interface RemoveFromCart {
  type: ProductActions.REMOVE_FROM_CART;
  payload: number;
}

interface SetLoadingAction {
  type: typeof ProductActions.SET_LOADING;
  payload: boolean;
}

interface SetErrorAction {
  type: typeof ProductActions.SET_ERROR;
  payload: string;
}

interface SetCurrentProduct {
  type: typeof ProductActions.SET_CURRENT_PRODUTC;
  payload: IProduct;
}

export type ProductAction =
  | GetProductAction
  | AddToCartAction
  | SetLoadingAction
  | SetErrorAction
  | RemoveFromCart
  | SetCurrentProduct
  | SetSearchProduct;
