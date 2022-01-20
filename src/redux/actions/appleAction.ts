import { ThunkAction } from "redux-thunk";
import axios from "axios";
import { IApple } from "../../models/IApple";
import { RootState } from "../store";
import { AppleAction, AppleEnum } from "../types";

export const getApple = (): ThunkAction<void, RootState, null, AppleAction> => {
  return async (dispatch) => {
    try {
      const response = await axios.get<IApple[]>("http://localhost:3001/apple");
      dispatch({ type: AppleEnum.GET_APPLE, payload: response.data });
    } catch (e) {
      console.log("Error");
    }
  };
};
