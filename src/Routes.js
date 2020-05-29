import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Event from './components/Event';
import Contact from './components/Contact';


const CustomRoutes = () => {
    return(
        <Router>
            <div>
                <Route exact path="/Profile" component={Home}/>
                <Route path="/Profile/About" component={About}/>
                <Route path="/Profile/Event" component={Event}/>
                <Route path="/Profile/Contact" component={Contact}/>
            </div>
        </Router>
    )}

export default CustomRoutes;