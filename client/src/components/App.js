import { Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { ConnectedNavigation } from "./Navigation";
import { ConnectedDashboard } from "./Dashboard";
import { ConnectedTaskDetail } from "./TaskDetail";

import { store } from "../store";
import { history } from "../store/history";

const App = () => {
  return (
    <Router history={history}>
      <Provider store={store}>
        <div className="App">
          <ConnectedNavigation />
          <Route exact path="/dashboard" component={ConnectedDashboard} />
          <Route
            exact
            path="/task/:id"
            render={({ match }) => <ConnectedTaskDetail match={match} />}
          />
        </div>
      </Provider>
    </Router>
  );
};

export default App;
