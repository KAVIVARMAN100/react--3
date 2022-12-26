import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faSignOut } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

function Topbar() {
    const [isVisible, setVisible] = useState(false)
    return (

        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

            {/* <!-- Topbar Search --> */}
            <form
                class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                <div class="input-group">
                    <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..."
                        aria-label="Search" aria-describedby="basic-addon2" />
                    <div class="input-group-append">
                        <button class="btn btn-primary" type="button">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                </div>
            </form>
            {/* <!-- Nav Item - User Information --> */}

            <div>
                <span class="mr-2 d-none d-lg-inline text-gray-600 small">Sivasankar J</span>
                <img class="img-profile rounded-circle" style={{ width: 30 }}
                    src="https://cdn-icons-png.flaticon.com/512/21/21104.png" />
            </div>
            <button
                onClick={() => setVisible(!isVisible)}
                class={isVisible ? "nav-link dropdown-toggle show" : "nav-link dropdown-toggle"}
                id="navbarDropdownMenuLink" data-bs-toggle="dropdown"
                aria-expanded={isVisible}
                style={{ border: "none", background: "none" }}></button>


            {/* <!-- Dropdown - User Information --> */}
            <div class={isVisible ? "dropdown-menu dropdown-menu-right shadow animated--grow-in show" : "dropdown-menu dropdown-menu-right shadow animated--grow-in"}
                aria-labelledby="navbarDropdownMenuLink">
                <Link class="dropdown-item" to={"/"} data-toggle="modal" data-target="#logoutModal">
                    <FontAwesomeIcon icon={faSignOut} />
                    Logout
                </Link>
            </div>
        </nav >
    )
}

export default Topbar





