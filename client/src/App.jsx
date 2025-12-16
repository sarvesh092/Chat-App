import "./App.css";
import Route from "./routes/route.jsx";
import { store } from "./store/store.js";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Route />
    </Provider>
  );
}

export default App;
