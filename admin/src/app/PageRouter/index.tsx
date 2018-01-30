/**
 * Created by wenbo.kuang on 2018/1/25.
 */
import * as React from 'react';
import { HashRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import RouterEntry from "../entry/RouterEntry";
import NotFound from "../components/NotFound";
import CustomLogin from "../components/CustomLogin";

export default class PageRouter extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/app/dashboard/index" push />} />
          <Route path="/app" component={RouterEntry} />
          <Route path="/404" component={NotFound} />
          <Route path="/login" component={CustomLogin} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}