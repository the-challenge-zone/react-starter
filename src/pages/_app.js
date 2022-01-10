import "normalize.css";
import { Provider } from "react-redux";
import store from "../app/store";

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
