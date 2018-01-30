/**
 * Created by wenbo.kuang on 2018/1/25.
 */
import * as React from 'react';

interface CounterDisplayProps {
  counter: number;
}

export default class CounterDisplay extends React.Component<CounterDisplayProps, {}> {
  render() {
    return (
      <div>
        <h1>Current Count is {this.props.counter}</h1>
      </div>
    );
  }
}