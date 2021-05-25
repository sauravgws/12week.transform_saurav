import React from 'react';
import AppNavbar from './Navbar';
import LoginPage from './LoginPage';
import MainPage from './MainPage';
import TrainingPage from './Training';
import NutritionPage from './Nutrition';
import SupplementsPage from './Supplements';
import Footer from './Footer'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function App(){
    return(
        <Router>
            
                <AppNavbar />
            <Switch>
                <Route path='/' exact component={LoginPage} />
                <Route path='/mainpage'  component={MainPage} />
                <Route path='/training'  component={TrainingPage} />
                <Route path='/nutrition'  component={NutritionPage} />
                <Route path='/supplements'  component={SupplementsPage} />
            </Switch>
                <Footer/>
        </Router>
    );
}