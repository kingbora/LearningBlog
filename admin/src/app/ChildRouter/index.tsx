/**
 * Created by wenbo.kuang on 2018/1/25.
 */
import * as React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import DashBoard from "../components/DashBoard";

export default class RootRouter extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/app/dashboard/index" component={DashBoard} />
        <Route render={() => <Redirect to="/404" />} />
      </Switch>
    )
  }
}
