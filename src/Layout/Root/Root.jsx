import React from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import Home from '../../Component/Home/Home';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <Navbar> </Navbar>

            <Home> </Home>

            <Outlet></Outlet>
        </div>
    );
};

export default Root;