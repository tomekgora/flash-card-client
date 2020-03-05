import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import NavBar from "./components/NavBar";
import LoginSignup from "./pages/LoginSignup";
import Quiz from "./pages/Quiz";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <NavBar />
          <Route exact path="/" component={LoginSignup} />
          <Route path="/quiz" component={Quiz} />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
