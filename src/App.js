import React from 'react';
import Header from './components/Header';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import About from './views/About';
import Home from './views/Home';
import { Auth } from './views/Auth';
import UserData from './services/Auth';
import Secret from './views/Secret';


function App() {

    const loggedIn = UserData.getName() !== "" ? true : false;

    return (
        <div className="relative pb-10 min-h-screen bg-gradient-to-b from-gray-100 to-white">
            {/* https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/BrowserRouter.md */}
            <Router basename="/aprijplt">
                <Header />

                <div className="p-3">

                    <Switch>
                        <Route exact path="/">
                            {loggedIn ? <Redirect to="/secret" /> : <Home />}
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>

                        {/* :id adalah wildcard */}
                        <Route path="/secret">
                            {loggedIn ? <Secret /> : <Redirect to="/login" />}
                        </Route>

                        <Route path="/login">
                            <Auth.Login />
                        </Route>

                        <Route path="/logout">
                            <Auth.Logout />
                        </Route>
                    </Switch>

                </div>
            </Router>
        </div>
    );
}

export default App;
