import { ThunkAction } from "redux-thunk";
import Store from "../../Api/AppleService";
import { RootState } from "../store";
import { AppleAction, AppleEnum } from "../types";

export const getApple = (): ThunkAction<void, RootState, null, AppleAction> => {
  return async (dispatch) => {
    try {
      const response = await Store.getProduct();
      dispatch({ type: AppleEnum.GET_APPLE, payload: response.data });
    } catch (e) {
      console.log("Error");
    }
  };
};
