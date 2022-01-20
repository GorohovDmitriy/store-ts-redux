import { AppleAction, AppleEnum, AppleState } from "../types";

const initialState: AppleState = {
  apple: [],
  isLoading: false,
};

export default function appleReducer(
  state = initialState,
  action: AppleAction
): AppleState {
  switch (action.type) {
    case AppleEnum.GET_APPLE:
      return {
        apple: action.payload,
        isLoading: true,
      };

    default:
      return state;
  }
}
