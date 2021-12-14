import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export function Navbar() {
    const navigate = useNavigate();
    const [value, setValue] = useState('');
    const [navbarOpen, setNavbarOpen] = useState(false);

    function goToSearchedPokemon() {
        if (value) {
            navigate(`/pokemonsInformation/${value}`)
        }
    }
    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-red-500 mb-0.5">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <a
                            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                            href="/"
                        >
                            <img className="w-30 h-12" src="https://seeklogo.com/images/P/Pokemon-logo-497D61B223-seeklogo.com.png"
                            >
                            </img>

                        </a>
                        <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                    </div>

                    <form method="get">
                        <label htmlFor="header-search">
                            <span className="visually-hidden"></span>
                        </label>
                        <input
                            className="rounded focus:bg-slate-300 outline-none p-1"
                            type="text"
                            placeholder="Search pokemon"
                            onChange={e => setValue(e.target.value.toLowerCase())}
                        />
                        <button className="rounded bg-white hover:bg-slate-300 p-0.5 m-5" type="submit" onClick={() => goToSearchedPokemon()}> Search</button>
                    </form>

                </div>
            </nav>
        </>
    );
}