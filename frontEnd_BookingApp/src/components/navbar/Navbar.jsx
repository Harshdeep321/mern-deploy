import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import { animateScroll as scroll } from "react-scroll";

const Navbar = () => {
    const { user } = useContext(AuthContext);
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 10) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeBackground);
        return () => {
            window.removeEventListener("scroll", changeBackground);
        };
    }, []);

    const scrollToAbout = () => {
        scroll.scrollTo(document.getElementById("aboutSection").offsetTop, {
            smooth: "easeInOutQuart",
        });
    };

    const scrollToTop = () => {
        scroll.scrollToTop({
            smooth: "easeInOutQuart",
        });
    };

    return (
        <nav
            className={
                navbar
                    ? "navbar active fixed-top navbar-expand-lg navbar-light bg-light"
                    : "navbar fixed-top navbar-expand-lg navbar-light bg-light"
            }
        >
            <ToastContainer autoClose={800} />

            <div className="container">
                <div className="logo">
                    <Link className="navbar-brand" to="/">
                        HotelBooking
                    </Link>
                </div>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="navbar-btn" onClick={scrollToTop}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="navbar-btn" onClick={scrollToAbout}>
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/allhotels" className="navbar-btn">
                                Hotels
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="navbar-btn">
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {user ? (
                            <li
                                className="nav-item me-3"
                                onClick={() => {
                                    setTimeout(() => {
                                        window.location.reload();
                                    }, 800);
                                    localStorage.removeItem("user");
                                }}
                            >
                                <span className="nav-link btn px-2 btn-md d-flex align-items-center">
                                    <img src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" alt="User Icon" className="me-1" style={{ width: "20px" }}/>
                                    {user.username}
                                </span>
                            </li>
                        ) : (
                            <>
                                <li className="nav-item me-3">
                                    <Link className="nav-link btn px-2 btn-md login-btn" to="/login" >
                                        Login
                                        <i className="bx bx-log-in-circle"></i>
                                    </Link>
                                </li>
                                <li className="nav-item me-3">
                                    <Link className="nav-link btn px-2 btn-md login-btn" to="/register">
                                        Register
                                        <i className="bx bx-user-plus"></i>
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
