import { BrowserRouter, Route } from "react-router-dom";
import "../css/App.css";
import { Exam } from "./exam/Exam";
import { Home } from "./home/Home";
import { Result } from "./exam/Result";
import { Signin } from "./sign/Signin";
import { Wordbook } from "./wordbook/Wordbook";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import WithSubnavigation from "./home/Nav";

const breakpoints = {
  sm: "360px",
  md: "768px",
  lg: "1024px",
  xl: "1440px",
};

const newTheme = extendTheme({ breakpoints });

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <ChakraProvider theme={newTheme}>
        <Route path="/" component={WithSubnavigation} />

        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/exam">
          <Exam />
        </Route>

        <Route exact path="/result">
          <Result />
        </Route>

        <Route exact path="/signin">
          <Signin />
        </Route>

        <Route exact path="/wordbook">
          <Wordbook />
        </Route>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
