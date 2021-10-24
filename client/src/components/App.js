import { Provider } from "react-redux";
import { ConnectedDashboard } from "./Dashboard";

import { store } from "../store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <ConnectedDashboard />
      </div>
    </Provider>
  );
};

export default App;
