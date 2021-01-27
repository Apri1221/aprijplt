import React from 'react'
import { NavLink } from 'react-router-dom';
import UserData from '../services/Auth'

function Header() {
    let buttonLogout =
        <NavLink exact to='/logout' className="text-gray-700 md:ml-0 ml-auto" activeClassName="text-blue-500 active">
            <div className="px-3 cursor-pointer md:px-6 hover:bg-blue-200">
                <div className="flex flex-col py-2 md:w-20">
                    <div className="flex justify-center">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 25 25" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                    </div>
                    <span className="font-semibold tracking-wide text-center capitalize anti-xsaliased md:text-base text-sm sm:subpixel-antialiased">logout</span>
                </div>
            </div>
        </NavLink>

    let buttonLogin =
        <NavLink exact to='/login' className="text-gray-700 md:ml-0 ml-auto" activeClassName="text-blue-500 active">
            <div className="px-3 cursor-pointer md:px-6 hover:bg-blue-200">
                <div className="flex flex-col py-2 md:w-20">
                    <div className="flex justify-center">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 25 25" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                        </svg>
                    </div>
                    <span className="font-semibold tracking-wide text-center capitalize anti-xsaliased md:text-base text-sm sm:subpixel-antialiased">login</span>
                </div>
            </div>
        </NavLink>

    const loggedIn = UserData.getName() !== "" ? true : false;


    return (
        <header>
            <nav id="anjay" className="fixed bottom-0 flex justify-center w-full bg-white shadow-top md:px-10 text-base">
                <a href="/aprijplt" className="text-gray-700">
                    <div className="px-3 cursor-pointer md:px-6 hover:bg-blue-200">
                        <div className="flex flex-col py-2 md:w-20">
                            <div className="flex justify-center">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 25 25" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    xmlns="http://www.w3.org/2000/svg"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <span className="font-semibold tracking-wide text-center capitalize anti-xsaliased md:text-base text-sm sm:subpixel-antialiased">recents</span>
                        </div>
                    </div>
                </a>

                <NavLink exact to="/secret" className="text-gray-700" activeClassName="text-blue-500 active">
                    <div className="px-3 cursor-pointer md:px-6 hover:bg-blue-200">
                        <div className="flex flex-col py-2 md:w-20">
                            <div className="flex justify-center">
                                <svg className="inline-block text-center w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 25 25" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" />
                                    <line x1="13" y1="8" x2="15" y2="8" />
                                    <line x1="13" y1="12" x2="15" y2="12" />
                                </svg>
                            </div>
                            <span className="font-semibold tracking-wide text-center capitalize anti-xsaliased md:text-base text-sm sm:subpixel-antialiased">secret</span>
                        </div>
                    </div>
                </NavLink>

                <NavLink exact to='/about' className="text-gray-700" activeClassName="text-blue-500 active">
                    <div className="px-3 cursor-pointer md:px-6 hover:bg-blue-200">
                        <div className="flex flex-col py-2 md:w-20">
                            <div className="flex justify-center">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 25 25" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <circle cx="12" cy="7" r="4" />
                                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                </svg>
                            </div>
                            <span className="font-semibold tracking-wide text-center capitalize anti-xsaliased md:text-base text-sm sm:subpixel-antialiased">about</span>
                        </div>
                    </div>
                </NavLink>

                {loggedIn ? (buttonLogout) : (buttonLogin)}
            </nav>
        </header>
    )
}

export default Header;