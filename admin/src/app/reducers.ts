/**
 * Created by wenbo.kuang on 2018/1/25.
 */
import { combineReducers } from 'redux';
import {counterReducer} from "./components/reducer";

export const rootReducers = combineReducers({
  demoReducer: counterReducer
});