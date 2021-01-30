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
import queryString from 'query-string';
import axios from 'axios';
import Swal from 'sweetalert2'


const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

function App() {
    const url = 'https://my-json-server.typicode.com/apri1221/aprijplt/users';
    const params = queryString.parse(window.location.search);
    
    let redirect = UserData.getRedirect();
    axios.get(url + `?username=${params.user}&password=${params.pass}`).then(response => {
        if(response.status === 200 && response.data.length > 0) {
            console.log(response)
            UserData.setName(params.user);
            UserData.setAccountIG(response["data"][0]["accountIg"]);
            UserData.setRedirect(1);
            Toast.fire({
                icon: 'success',
                title: 'Signed in successfully',
                didClose: () => {
                    window.location.replace('/aprijplt')
                }
            })
        }
    }).catch((e) => {
        console.log(e.message)
    });
    const loggedIn = UserData.getName() !== "" ? true : false;
    
    return (
        <div className="relative pb-10 min-h-screen bg-gradient-to-b from-gray-100 to-white">
            {/* https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/BrowserRouter.md */}
            <Router basename="/aprijplt">
                <Header />

                <div className="p-3">

                    <Switch>
                        <Route exact path="/">
                            {/* eslint-disable-next-line */}
                            {redirect == 1 ? <Redirect to="/secret" /> : <Home />}
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>

                        {/* :id adalah wildcard */}
                        <Route path="/secret">
                            {(loggedIn) ? <Secret /> : <Redirect to="/login" />}
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
