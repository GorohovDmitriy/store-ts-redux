import { IApple } from "../models/IApple";

export enum AppleEnum {
  GET_APPLE = "GET_APPLE",
  SET_LOADING = "SET_LOADING",
  ADD_TO_CART = 'ADD_TO_CART',
}

export interface AppleState {
  apple: IApple[];
  isLoading: boolean;
}

interface GetAppleAction {
  type: AppleEnum.GET_APPLE;
  payload: IApple[];
}

interface AddToCartAction {
    type: AppleEnum.ADD_TO_CART
    payload: IApple
}

export type AppleAction = GetAppleAction | AddToCartAction;
