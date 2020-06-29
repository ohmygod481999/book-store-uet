import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ListProductSection from "../../Components/ListProductSection";
import books from "../dummy-data/book";

function Products(props) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(books);
    }, []);
    return (
        <div>
            <ListProductSection
                products={products}
                title="Danh sách sản phẩm"
            />
        </div>
    );
}

Products.propTypes = {};

export default Products;
