import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from "../../actions/cart.action";

function Header(props) {
    const productsCart = useSelector((state) => {
        return state.cart.products;
    });

    const dispatch = useDispatch();

    const toggle = () => {
        dispatch(toggleCart());
    };

    return (
        <header>
            <div className="header-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <Link to="/" className="web-url">
                                www.longvb.technology
                            </Link>
                        </div>
                        <div className="col-md-6">
                            <h5>
                                Free Shipping Over $99 + 3 Free Samples With
                                Every Order
                            </h5>
                        </div>
                        <div className="col-md-3">
                            <span className="ph-number">
                                Call : 082 940 0301
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-menu">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <a className="navbar-brand" href="/">
                            <img src={logo} alt="logo" />
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav ml-auto">
                                <li className="navbar-item active">
                                    <Link to="/" className="nav-link">
                                        Home
                                    </Link>
                                </li>
                                <li className="navbar-item">
                                    <Link to="/products" className="nav-link">
                                        Shop
                                    </Link>
                                </li>
                                <li className="navbar-item">
                                    <Link to="/about" className="nav-link">
                                        About
                                    </Link>
                                </li>
                                <li className="navbar-item">
                                    <Link to="/login" className="nav-link">
                                        Login
                                    </Link>
                                </li>
                            </ul>
                            <div className="cart my-2 my-lg-0" onClick={toggle}>
                                <span>
                                    <i
                                        className="fa fa-shopping-cart"
                                        aria-hidden="true"
                                    />
                                </span>
                                <span className="quantity">
                                    {productsCart.length}
                                </span>
                            </div>
                            <form className="form-inline my-2 my-lg-0">
                                <input
                                    className="form-control mr-sm-2"
                                    type="search"
                                    placeholder="Search here..."
                                    aria-label="Search"
                                />
                                <span className="fa fa-search" />
                            </form>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}

Header.propTypes = {};

export default Header;
