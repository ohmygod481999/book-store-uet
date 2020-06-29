import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Breadcrum from "../../Components/Breadcrum";
import ProductSection from "./ProductSection";
import books from "../dummy-data/book";

function Product(props) {
    const { match } = props;
    const productId = match.params.id;

    const [product, setProduct] = useState(null);

    useEffect(() => {
        const book = books.find((val) => val.id === productId);
        setProduct(book);
    }, []);

    return (
        <div>
            <Breadcrum section={product ? product.name : ""} />
            <ProductSection product={product} />
        </div>
    );
}

Product.propTypes = {};

export default Product;
