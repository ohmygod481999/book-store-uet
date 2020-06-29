import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import RecommendSection from "../../Components/RecommendSection";
import AboutSection from "../../Components/AboutSection";
import ListProductSection from "../../Components/ListProductSection";
import FeatureSection from "../../Components/FeatureSection";
import Cart from "../../Components/Cart";
import books from "../dummy-data/book";

function Home(props) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(books);
    }, []);

    return (
        <div>
            <RecommendSection products={products} />
            <AboutSection />
            <ListProductSection
                products={products}
                title="Danh sách sản phẩm"
                max={5}
            />
            <FeatureSection />
        </div>
    );
}

Home.propTypes = {};

export default Home;
