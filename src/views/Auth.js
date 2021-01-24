import React, { useState } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import UserData from '../services/Auth';


const MySwal = withReactContent(Swal)

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

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const url = 'https://my-json-server.typicode.com/apri1221/aprijplt/users';

    function handleSubmit(event) {
        event.preventDefault();

        axios.get(url + `?username=${username}&password=${password}`).then(response => {
            if(response.status === 200) {
                UserData.setName(username);
                UserData.setAccountIG(response["data"][0]["accountIg"]);
                Toast.fire({
                    icon: 'success',
                    title: 'Signed in successfully',
                    didClose: () => {
                        window.location.replace('/aprijplt')
                    }
                })
            } else{
                MySwal.fire({
                    title: 'Error!',
                    text: 'User not found',
                    icon: 'error',
                    confirmButtonText: 'Try Again'
                })
            }
        }).catch((e) => {
            console.log(e.message)
        });
    }

    return (
        <div className="flex flex-col items-center content-center justify-center">
            <form className="lg:w-1/3 bg-white rounded-lg p-8 flex flex-col w-full mt-20 relative z-10 shadow-lg" onSubmit={handleSubmit} >
                <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Login</h2>
                <p className="leading-relaxed mb-5 text-gray-700">Input username and password</p>
                <div className="relative mb-4">
                    <label htmlFor="username" className="leading-loose text-sm text-gray-700">Username</label>
                    <input type="username" id="username" name="username" className="w-full bg-white rounded border border-gray-400 text-base text-gray-700 py-1 px-3 leading-8"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="relative mb-4">
                    <label htmlFor="password" className="leading-loose text-sm text-gray-700">Password</label>
                    <input type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-400 text-base text-gray-700 py-1 px-3 leading-8"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Submit
                </button>
                <p className="text-xs text-gray-500 mt-3">Akses masuk hanya dimiliki oleh pemilik situs.</p>
            </form>
        </div>
    )
}

function Logout() {
    UserData.deleteName();
    Toast.fire({
        icon: 'success',
        title: 'Logout successfully',
        didClose: () => {
            window.location.replace('/aprijplt')
        }
    })
}

export const Auth = {
    Login,
    Logout
};