import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/authContexts';
import '../Header/header.css'

export default function Header() {
    const {
        isAuthenticated,
        username,
    } = useContext(AuthContext);
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light shadow">
                <div className="container d-flex justify-content-between align-items-center">
                    <Link to='/'
                        className="navbar-brand text-success logo h1 align-self-center"
                        
                    >
                        RaiPhone
                    </Link>
                    <button
                        className="navbar-toggler border-0"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#templatemo_main_nav"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between"
                        id="templatemo_main_nav"
                    >
                        <div className="flex-fill">
                            <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">
                                        About
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/shop">
                                        Shop
                                    </Link>
                                </li>
                                {isAuthenticated && (
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/add">
                                                Add phone
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/logout">
                                                Logout
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <span className='nav-link'>| {username}</span>
                                        </li>
                                    </>
                                )}
                                {!isAuthenticated && (
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/login">
                                                Login
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/register">
                                                Register
                                            </Link>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </div>
                        <div className="navbar align-self-center d-flex">
                            <div className="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputMobileSearch"
                                        placeholder="Search ..."
                                    />
                                    <div className="input-group-text">
                                        <i className="fa fa-fw fa-search" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}