import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import './App.css';
import About from './components/pages/About';
import Pictures from './components/pages/Pictures'
import Feedback from './components/pages/Feedback';
import Pet from './components/pages/Pet';
import Ignore from './components/pages/Ignore';
import Milk from './components/pages/Milk';

function App() {
  return (
    <>
        <Router>
            <Navbar />
            <Switch>
                <Route path='/thecatsproject' exact component={Home} />
                <Route path='/thecatsproject/about' component={About} />
                <Route path='/thecatsproject/pictures' component={Pictures} />
                <Route path='/thecatsproject/feedback' component={Feedback} />
                <Route path='/thecatsproject/pet' component={Pet} />
                <Route path='/thecatsproject/ignore' component={Ignore} />
                <Route path='/thecatsproject/milk' component={Milk} />

            </Switch>
        </Router>
    </>
  );
}

export default App;
