import React from "react";
import Navbar from "../Navbar/Navbar";
import Router from "../Router/Router";
import './Layout.css';

export default function Layout() {
    return (
        <div className="container">
            <Navbar/>
            <Router/>
        </div>
    )
}