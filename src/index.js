import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const container = document.getElementById("root"); // Getting the root element from HTML
const root = createRoot(container); // Creating a root for the React app

root.render(
  <React.StrictMode>
    <Provider store={store}>
      {" "}
      {/* Makes the Redux store available to any nested components */}
      <Router>
        {" "}
        {/* Router component to handle navigation */}
        <PersistGate loading={null} persistor={persistor}>
          {" "}
          {/* PersistGate delays rendering until persisted state is retrieved */}
          <App />
        </PersistGate>
      </Router>
    </Provider>
  </React.StrictMode>
);

reportWebVitals(); // This function can be used to measure performance
