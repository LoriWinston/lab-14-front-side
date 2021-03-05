import React, { Component } from 'react'
import './App.css';
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';
// import Header from './components/Header.js';
// import PrivateRoute from './components/PrivateRoute.js';
// import Home from './Home/Home.js';
// import SignUpPage from './AuthPages/SignUpPage.js';
// import LoginPage from './AuthPages/LoginPage.js';
import AdviceListPage from './AdviceListPage/AdviceListPage.js';
// import { getUserFromLocalStorage, putUserInLocalStorage } from './local-storage-utils';
// import FavoritesPage from './FavoritesPage/FavoritesPage';

export default class App extends Component {
    // state = {
    //   user: getUserFromLocalStorage()
    // }

    // handleUserChange = (user) => {
    //   this.setState({ user })
      
    //   putUserInLocalStorage(user);
    // }

    // handleLogout = () => {
    //   this.handleUserChange();
    // }

    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route
                            path="/search" 
                            exact
                            render={(routerProps) => <AdviceListPage/>}
                          />
                    </Switch>
                </Router>
            </div>
        )
    }
}