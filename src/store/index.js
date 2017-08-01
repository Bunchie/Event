import  reducer from "../reducers";
import logger from "redux-logger";
import {initialState} from "./initial_state";
import promisesMiddleware from "../middlewares";
import {createStore as store, applyMiddleware} from 'redux';

const createStoreWithMiddleware = applyMiddleware(promisesMiddleware, logger)(store);

export default createStoreWithMiddleware(reducer, initialState);