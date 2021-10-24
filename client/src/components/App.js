import { Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { ConnectedDashboard } from "./Dashboard";

import { store } from "../store";
import { history } from "../store/history";
import { ConnectedNavigation } from "./Navigation";

const App = () => {
  return (
    <Router history={history}>
      <Provider store={store}>
        <div className="App">
          <ConnectedNavigation />
          <Route exact path="/dashboard" component={ConnectedDashboard} />
        </div>
      </Provider>
    </Router>
  );
};

export default App;
