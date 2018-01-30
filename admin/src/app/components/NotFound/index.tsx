/**
 * Created by wenbo.kuang on 2018/1/25.
 */
import * as React from 'react';
const notFoundImg = require('~/404.png');

interface NotFoundState {
  animated: string;
}

export default class NotFound extends React.Component<{}, NotFoundState> {
  constructor(props: any) {
    super(props);
    this.state = {
      animated: ''
    }
  }

  enter = () => {
    this.setState({animated: 'hinge'});
  };

  render() {
    return (
      <div className="center" style={{height: '100%', background: '#ececec', overflow: 'hidden'}}>
        <img src={notFoundImg} alt="404" className={`animated swing ${this.state.animated}`} onMouseEnter={this.enter} />
      </div>
    )
  }
}