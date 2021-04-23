import { ReactDOM, App, Provider } from "Imports";
import store from "Redux/index";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
