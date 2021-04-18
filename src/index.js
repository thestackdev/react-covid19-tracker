import { ReactDOM, App, Provider, createStore, Reducer } from "Imports";

const store = createStore(Reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
