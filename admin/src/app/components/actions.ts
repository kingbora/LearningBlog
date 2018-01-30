/**
 * Created by wenbo.kuang on 2018/1/25.
 */
import {createAction} from "redux-actions";
import {MINUS_CLICK, PLUS_CLICK} from "./constants";


export const minusClick = createAction<any>(MINUS_CLICK);
export const plusClick = createAction<any>(PLUS_CLICK);