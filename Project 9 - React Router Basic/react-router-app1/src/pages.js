import React from "react";
import {Link, useLocation, Outlet} from "react-router-dom";
import './pages.css';

export function Home(){
    return(
        <div>
            <h1>[Company Website]</h1>
            <nav>
                <ul className="nav-menu">
                    <li><Link to="about">About Us</Link></li>
                    <li><Link to="events">Future Events</Link></li>
                    <li><Link to="contact">Contact Us</Link></li>
                </ul>   
            </nav>
        </div>
    );
}
// Home Page Ends ********************************************************

//About Page Starts ******************************************************
export function About() {
    return(
        <div>
            <h1>[About]</h1>
            <nav>
                <ul className="nav-menu">
                    <li><Link to="services">Our Services</Link></li>
                    <li><Link to="company-history">Company History</Link></li>
                    <li><Link to="locations">Company Locations</Link></li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    );
}
export function Services() {
    return(
        <div>
            <h3>[Our Services]</h3>
        </div>
    );
}
export function CompanyHistory() {
    return(
        <div>
            <h3>[Company History]</h3>
        </div>
    );
};


export function CompanyLocation() {
    return(
        <div>
            <h3>[Location Map]</h3>
        </div>
    );
};
// About Page Ends Here *******************************************************


export function Contact() {
    return(
        <div>
            <h1>[Contact Us]</h1>
        </div>
    );
};

export function Events(params) {
    return(
        <div>
            <h1>[Events]</h1>
        </div>
    );
}


/*************** wrong path handel *******************************/
export function Error404() {
    let location = useLocation();
    console.log(location);
    return(
        <div>
            <h1>Error 404</h1>
            <h3>Nohing's Available for "{location.pathname}"</h3>
        </div>
    );
}