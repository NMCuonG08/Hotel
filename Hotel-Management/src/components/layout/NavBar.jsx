import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ModalLogin from '../Modal/ModalLogin';
import { Button } from 'react-bootstrap';

const NavBar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);


   
    useEffect(() => {
        
        const jwtToken = localStorage.getItem('jwtToken'); 
        if (jwtToken) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleOpenModal = () => {
        setShowModal(true)
        
    };

    const handleDropdownToggle = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleLogOut = () =>  {
        localStorage.removeItem('jwtToken')
        window.location.reload();
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary ms-5 " style={{  height : "70px" }} role="navigation">
            <div className="container-fluid ms-5 ">
                <Link to="/" className="navbar-brand ">
                    <h3 > MyHotel.com</h3>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarScroll"
                    aria-controls="navbarScroll"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse me-5 " id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                       
                    </ul>
                    <ul className="d-flex navbar-nav  " style={{ color: 'red !important'}} >
                        <li className="nav-item me-4" >
                            <button className="btn btn-none border border-1 border-dark rounded-4 ">
                            <i className="bi bi-cloud-arrow-down-fill mt-3 !important "/>Tải app
                            </button>
                        </li>
                         <li className="nav-item me-4">
                            <NavLink className="nav-link" to={"/find-booking"}>
                                 <i className="bi bi-globe-americas"/>    Language
                            </NavLink>
                        </li>
                        <li className="nav-item me-4">
                            <NavLink className="nav-link" to={"/find-booking"}>
                                Đăng thông tin lưu trú
                            </NavLink>
                        </li>
                        <li className="nav-item me-4">
                            <NavLink className="nav-link" to={"/find-booking"}>
                                Hỗ trợ
                            </NavLink>
                        </li>
                        <li className="nav-item me-4">
                            <NavLink className="nav-link" to={"/find-booking"}>
                                Chuyến đi 
                            </NavLink>
                        </li>
                       
                        <li>
                             {!isLoggedIn ? (
                              <>
                                  <button onClick={handleOpenModal} className='btn btn-success'>Sign in</button>
                                  {showModal && <ModalLogin show={showModal} onClose={() => setShowModal(false)} />}
                              </>
                          ) : (
                              <>
                                  <button onClick={handleLogOut} > Dang xuat </button>
                              </>
                          )}

                            
                        </li>
                        
                    </ul>
                    
                </div>
            </div>
            
        </nav>
        
    );
};

export default NavBar;
