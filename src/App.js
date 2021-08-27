import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Resume from "./components/pages/Resume";
import Projects from "./components/pages/Projects";
import Deploy from "./components/pages/Deploy";




function App() {
  return (
   <Router>
      <div>
      <Header/>
        <Route exact path="/" component={Projects} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/deploy" component={Deploy} />
      <Footer/>
      </div>
    </Router>
  );
}

export default App;
