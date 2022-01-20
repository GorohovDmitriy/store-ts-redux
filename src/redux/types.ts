import { IProduct } from "../models/IProduct";

export enum AppleEnum {
  GET_APPLE = "GET_APPLE",
  SET_LOADING = "SET_LOADING",
  ADD_TO_CART = 'ADD_TO_CART',
}

export interface AppleState {
  apple: IProduct[];
  isLoading: boolean;
}

interface GetAppleAction {
  type: AppleEnum.GET_APPLE;
  payload: IProduct[];
}

interface AddToCartAction {
    type: AppleEnum.ADD_TO_CART
    payload: IProduct
}

export type AppleAction = GetAppleAction | AddToCartAction;
