/**
 * Created by wenbo.kuang on 2018/1/25.
 */
import * as React from 'react';
import Counter from "./Counter";
import CounterDisplay from "./CounterDisplay";
import {connect} from "react-redux";
import {minusClick, plusClick} from "./actions";

interface AppProps {

}

interface AppStateProps {
  counter?: number;
}

interface AppDispatchProps {
  minusClick?: Function;
  plusClick?: Function;
}

@(connect<AppProps & AppStateProps & AppDispatchProps, {}>(
  (state: any) => ({
    counter: state.demoReducer.counter
  }),
  (dispatch: any) => ({
    minusClick: () => {
      dispatch(minusClick(1));
    },
    plusClick: () => {
      dispatch(plusClick(1));
    }
  })
) as any)

export default class App extends React.Component<AppProps & AppStateProps & AppDispatchProps, {}> {
  render() {
    return (
      <div>
        <Counter onMinusClick={this.props.minusClick} onPlusClick={this.props.plusClick}></Counter>
        <CounterDisplay counter={this.props.counter}></CounterDisplay>
      </div>
    )
  }
}