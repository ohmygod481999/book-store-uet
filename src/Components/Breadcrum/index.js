import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Breadcrum(props) {
    const { section } = props;
    return (
        <div className="breadcrumb">
            <div className="container">
                <Link to="/" className="breadcrumb-item">
                    Home
                </Link>
                <span className="breadcrumb-item active">{section}</span>
            </div>
        </div>
    );
}

Breadcrum.propTypes = {};

export default Breadcrum;
