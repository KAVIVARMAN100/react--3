import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaughWink, faTachometer, faTachometerAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

function Sidebar() {
    const [isVisible, setVisible] = useState(false)
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            {/* <!-- Sidebar - Brand --> */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <FontAwesomeIcon icon={faLaughWink} />
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0" />

            {/* <!-- Nav Item - Dashboard --> */}
            <li className="nav-item active">
                <Link className="nav-link" to={"/portal/dashboard"}>
                    <FontAwesomeIcon icon={faTachometer} />
                    <span>&nbsp;Dashboard</span></Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/"}>
                    <FontAwesomeIcon icon={faTachometerAlt} />
                    <span>&nbsp;Login</span></Link>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider" />

            {/* <!-- Heading --> */}
            <div className="sidebar-heading">
                Interface
            </div>

            {/* <!-- Nav Item - Pages Collapse Menu --> */}
            <li className="nav-item">

                <button
                    onClick={() => setVisible(!isVisible)}
                    className={isVisible ? "nav-link " : "nav-link collapsed"}
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-controls="collapseTwo"
                    aria-expanded={isVisible}
                    style={{ border: "none", background: "none" }}><span>components</span></button>

                <div id="collapseTwo" className={isVisible ? "collapse show" : "collapse"} aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Components:</h6>
                        <Link className="collapse-item" to="/portal/button">Buttons</Link>                      
                    </div>
                </div>
            </li>
        </ul>
    )
}

export default Sidebar

