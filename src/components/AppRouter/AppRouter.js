import React from "react";
import {
  Router,
  Route,
  Switch
  // Link, NavLink
} from "react-router-dom";
import createHistory from "history/createBrowserHistory";
// import { connect } from "react-redux";
// import Layout from "../Screens/layout/layout";

import "./AppRouter.scss";
import VideoScreen from "../../screens/VideoScreen/VideoScreen";
import Layout from "../Layout/Layout";

export const history = createHistory();

const AppRouter = props => {
  return (
    <Router history={history}>
      <div className="app-layout">
        <Layout />
        <div className="wave"></div>
        <div className="app-content">
          <Switch>
            <Route path="/" component={VideoScreen} exact={true} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     menuToggle: state.UI.toggle
//   };
// };

// export default connect(mapStateToProps)(AppRouter);
export default AppRouter;
