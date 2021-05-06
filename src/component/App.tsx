import { BrowserRouter, Route } from "react-router-dom";
import { Exam } from "./body/exam/Exam";
import { Home } from "./body/home/Home";
import { Result } from "./body/exam/Result";
import { Signin } from "./body/home/sign/Signin";
import { Wordbook } from "./body/wordbook/Wordbook";
import { Footer } from "./footer/Footer";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import { Header } from "./header/Header";

const breakpoints = {
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
};

const newTheme = extendTheme({ breakpoints });

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <ChakraProvider theme={newTheme}>
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

        <Route exact path="/signin">
          <Signin />
        </Route>

        <Route exact path="/wordbook">
          <Wordbook />
        </Route>
        <Route path="/" component={Footer} />
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
