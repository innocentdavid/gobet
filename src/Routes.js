import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";

const AppRoute = () => {
    return (<div style={{ background: 'url(/images/bg.png)', backgroundPosition: 'center center', height: '100vh', width: '100%' }}>
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='*' element={<h1>Page not found!</h1>} />
            </Routes>
        </Router>
    </div>
    );
};

export default AppRoute;