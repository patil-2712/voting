import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light p-3 mb-2 bg-warning bg-gradient d-flex justify-content-end">
            <div className="container-fluid">
                
                    <strong>
                    भारत निर्वाचन आयोग..!<br></br>
                    Election Commission of India..!
                    </strong>
             
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex  justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active fs-4" aria-current="page" href="/Home">
                                <strong>Home</strong>
                            </a>
                        </li>
                        <li className="nav-item ms-3">
                            <a className="nav-link active fs-4" href="/VoterDetails">
                                <strong>VoterDetails</strong>
                            </a>
                        </li>
                        <li className="nav-item ms-3">
                            <a className="nav-link active fs-4" href="/Edit_Profile">
                                <strong>Edit Profile</strong>
                            </a>
                        </li>
                        <li className="nav-item ms-3">
                            <a className="nav-link active fs-4" href="/" tabIndex="-1" aria-disabled="true">
                                <strong>Logout</strong>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
