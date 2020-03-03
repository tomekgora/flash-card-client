import React from "react";
import store from "./store";
import { Route } from "react-router-dom";
import { Provider } from "react-redux";
import NavBar from "./components/NavBar";
import LoginSignup from "./pages/LoginSignup";
import Header from "./components/Header";

// import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <NavBar />
        <Route exact path="/" component={LoginSignup} />
      </Provider>
    </div>
  );
}

export default App;
