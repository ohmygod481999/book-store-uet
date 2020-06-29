import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function RecommendSection(props) {
    const { products } = props;

    if (!products)
        return (
            <div className="container">
                <p>không có sản phẩm nào</p>
            </div>
        );

    // Lay 4 product thoi
    const renderProducts = products.filter((product, index) => {
        return index < 4;
    });

    return (
        <section className="recomended-sec">
            <div className="container">
                <div className="title">
                    <h2>highly recommended books</h2>
                    <hr />
                </div>
                <div className="row">
                    {renderProducts.map((product, index) => {
                        return (
                            <div index={index} className="col-lg-3 col-md-6">
                                <div className="item">
                                    <img src={product.img} alt="img" />
                                    <h3>{product.name}</h3>
                                    <h6>
                                        <span className="price">
                                            {product.price}
                                        </span>{" "}
                                        / <a href="#">Buy Now</a>
                                    </h6>
                                    <div className="hover">
                                        <Link to={`/product/${product.id}`}>
                                            <span>
                                                <i
                                                    className="fa fa-long-arrow-right"
                                                    aria-hidden="true"
                                                />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

RecommendSection.propTypes = {};

export default RecommendSection;
