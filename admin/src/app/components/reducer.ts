/**
 * Created by wenbo.kuang on 2018/1/25.
 */
import { handleActions, Action } from 'redux-actions';
import {MINUS_CLICK, PLUS_CLICK} from "./constants";

const initStates = {
  counter: 0
};

export const counterReducer = handleActions({
  [MINUS_CLICK]: (state, action: Action<number>) => {
    console.log(state);
    return Object.assign({}, state, {
      counter: state.counter - action.payload
    });
  },
  [PLUS_CLICK]: (state, action: Action<number>) => {
    console.log(state);
    return Object.assign({}, state, {
      counter: state.counter + action.payload
    });
  }
}, initStates);