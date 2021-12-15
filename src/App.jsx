import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { Navbar } from './components/NavBar';
import { MainRoutes } from './routes/MainRoutes';


export function App() {
    return (
        <Router>
            <Navbar />
            <MainRoutes />
        </Router>

    )
}