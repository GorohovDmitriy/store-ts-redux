import { ThunkAction } from "redux-thunk";
import AppleService from "../../Api/AppleService";
import { RootState } from "../store";
import { AppleAction, AppleEnum } from "../types";

export const getApple = (): ThunkAction<void, RootState, null, AppleAction> => {
  return async (dispatch) => {
    try {
      const response = await AppleService.getProduct();
      dispatch({ type: AppleEnum.GET_APPLE, payload: response.data });
    } catch (e) {
      console.log("Error");
    }
  };
};
