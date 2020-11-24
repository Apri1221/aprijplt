import React from 'react';
import Header from './components/Header';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import About from './views/About';
import Home from './views/Home';
import Product from './views/Product';
import { Auth } from './views/Auth';
import UserData from './services/Users';


function App() {
    return (
        <div className="relative pb-10 min-h-screen bg-gradient-to-b from-gray-100 to-white">
            {/* https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/BrowserRouter.md */}
            <Router basename="/aprijplt">
                <Header />

                <div className="p-3">

                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        {/* :id adalah wildcard */}
                        <Route path="/products/:id">
                            <Product />
                        </Route>

                        <Route path="/login">
                            <Auth.Login />
                        </Route>
                    </Switch>

                </div>

            </Router>
        </div>
    );
}

export default App;
