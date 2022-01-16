import { BUYETH } from "../constants/ActionTypes";

const initialSettings = {
  buyEth: 0,
};

const settings = (state = initialSettings, action: any) => {
  switch (action.type) {
    case BUYETH:
      return {
        ...state,
        buyEth: action.payload,
      };
    default:
      return state;
  }
};

export default settings;
