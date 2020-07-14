import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './views/Home/Home';
//import Skills from './views/Skills/Skills';
import ProjectsList from './views/ProjectsList/ProjectsList';
import About from './views/About/About';
import Contact from './views/Contact/Contact';



function App() {
  
  return (
    <Router>
      <div className='App'>
        <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/projects' component={ProjectsList} />
            {/* <Route exact path='/skills' component={Skills} /> */}
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
          </Switch>
      </div>
    </Router>
  );
}


export default App;
