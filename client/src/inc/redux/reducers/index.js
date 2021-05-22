import{combineReducers} from "redux";
import storage from 'redux-persist/lib/storage';
import {persistReducer} from "redux-persist";

/**
 * reducer
 */
import opt from './opt';
import topbar from "./topbar";
import form from "./form";
import users from "./users";
import Admin from "./Admin";
import alert from "./alert";
const persistConfig = {
    key: "root",
    storage,
    whitelist:['modul']
}
/**
 *
 * @type {Reducer<CombinedState<unknown>>}
 */
const rootReducers = combineReducers({
    Admin,
    opt,
    topbar,
    alert,
    form,
    users
})

export default persistReducer(persistConfig,rootReducers)