import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import '../index.css';

const Layout = () => (
  <div className="wrapper">
    <div className="panel-bg">
      <Navbar />
      <Outlet />
    </div>
  </div>
);

export default Layout;
