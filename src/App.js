import { BrowserRouter, Switch, Route } from "react-router-dom";
import AboutMe from "./layouts/aboutMe";
import ContactMe from "./layouts/contactMe";

import Home from "./layouts/home";

import NavigationBar from "./components/navbar";
function App() {
  return (
    <BrowserRouter>
      <>
        <NavigationBar />
        <Switch>
          <Route path="/about-me" component={AboutMe} />
          <Route path="/contact-me" component={ContactMe} />
          <Route exact path="/" component={Home} />
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default App;
