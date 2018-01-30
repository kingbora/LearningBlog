/**
 * Created by wenbo.kuang on 2018/1/25.
 */
import * as React from 'react';
import {Button} from 'antd';

interface CounterProps {
  onMinusClick?: Function;
  onPlusClick?: Function;
}

export default class Counter extends React.Component<CounterProps, {}> {

  constructor(props: CounterProps) {
    super(props);
    this.decrease = this.decrease.bind(this);
    this.increase = this.increase.bind(this);
  }

  increase () {
    console.log("will call 'onPlusClick' props function.");
    this.props.onPlusClick();
  }

  decrease() {
    console.log("will call 'onMinusClick' props function.");
    this.props.onMinusClick();
  }

  render() {
    return (
      <div>
        <Button type="primary" icon="plus" onClick={this.increase} />
        <Button type="primary" icon="minus" onClick={this.decrease} />
      </div>
    );
  }
}