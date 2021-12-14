import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { Banner } from './components/Banner';
import { Navbar } from './components/NavBar';
import { MainRoutes } from './routes/MainRoutes';


export function App() {
    return (
        <Router>
            <Navbar />
            <Banner />
            <MainRoutes />
        </Router>

    )
}