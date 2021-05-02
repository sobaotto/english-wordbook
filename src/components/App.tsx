import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "../css/App.css";
import { Exam } from "./Exam";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Home } from "./Home";
import { Result } from "./Result";
import { Singin } from "./Singin";
import { Wordbook } from "./Wordbook";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Route path="/" component={Header} />
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/exam">
        <Exam />
      </Route>
      <Route exact path="/result">
        <Result />
      </Route>
      <Route exact path="/singin">
        <Singin />
      </Route>
      <Route exact path="/wordbook">
        <Wordbook />
      </Route>
      <Route path="/" component={Footer} />
    </BrowserRouter>
  );
}

export default App;
