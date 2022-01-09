import { combineReducers } from "redux";
import sets from './sets'
import errors from "./errors";
import messages from "./messages";
import auth from "./auth";

export default combineReducers({
    sets,
    errors,
    messages,
    auth
});