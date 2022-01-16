import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import HomeRouter from "./homeRouter";

export default (history: any) =>
  combineReducers({
    router: connectRouter(history),
    home: HomeRouter,
  });
