import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NewHome from "./pages/NewHome/NewHome";
import Wrapper from "./components/Wrapper";



function App() {
  return (
    <Router>
      <div>
        <Wrapper>
          <Route exact path="/react-portfolio">
            <NewHome />
          </Route>
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
