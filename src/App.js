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
                <Route path='/' exact component={Home} />
                <Route path='/about' component={About} />
                <Route path='/pictures' component={Pictures} />
                <Route path='/feedback' component={Feedback} />
                <Route path='/pet' component={Pet} />
                <Route path='/ignore' component={Ignore} />
                <Route path='/milk' component={Milk} />

            </Switch>
        </Router>
    </>
  );
}

export default App;
