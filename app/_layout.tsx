import { Provider } from "react-redux";
import store from "./src/store";
import App from "./app";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
