import React from "react";
import PropTypes from "prop-types";
import { addProduct, toggleCart, setProducts } from "../../actions/cart.action";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

function ProductSection(props) {
    const { product } = props;

    let history = useHistory();

    const dispatch = useDispatch();

    if (!product)
        return (
            <div className="container">
                <p>Sản phẩm không hợp lệ</p>
            </div>
        );

    const addProductToCart = () => {
        dispatch(addProduct(product));
        dispatch(toggleCart(true));
    };

    const buyNowHandler = (product) => {
        dispatch(setProducts([product]));
        history.push("/payment");
    };

    return (
        <section className="product-sec">
            <div className="container">
                <h1>{product.name}</h1>
                <div className="row">
                    <div className="col-md-6 slider-sec">
                        {/* main slider carousel */}
                        <div id="myCarousel" className="carousel slide">
                            {/* main slider carousel items */}
                            <div className="carousel-inner">
                                <div
                                    className="active item carousel-item"
                                    data-slide-number={0}
                                >
                                    <img
                                        src={product.img}
                                        className="img-fluid"
                                    />
                                </div>
                                <div
                                    className="item carousel-item"
                                    data-slide-number={1}
                                >
                                    <img
                                        src="images/product2.jpg"
                                        className="img-fluid"
                                    />
                                </div>
                                <div
                                    className="item carousel-item"
                                    data-slide-number={2}
                                >
                                    <img
                                        src="images/product3.jpg"
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                            {/* main slider carousel nav controls */}
                            {/* <ul className="carousel-indicators list-inline">
                                <li className="list-inline-item active">
                                    <a
                                        id="carousel-selector-0"
                                        className="selected"
                                        data-slide-to={0}
                                        data-target="#myCarousel"
                                    >
                                        <img
                                            src="images/product1.jpg"
                                            className="img-fluid"
                                        />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a
                                        id="carousel-selector-1"
                                        data-slide-to={1}
                                        data-target="#myCarousel"
                                    >
                                        <img
                                            src="images/product2.jpg"
                                            className="img-fluid"
                                        />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a
                                        id="carousel-selector-2"
                                        data-slide-to={2}
                                        data-target="#myCarousel"
                                    >
                                        <img
                                            src="images/product3.jpg"
                                            className="img-fluid"
                                        />
                                    </a>
                                </li>
                            </ul> */}
                        </div>
                        {/*/main slider carousel*/}
                    </div>
                    <div className="col-md-6 slider-content">
                        <p>
                            {product.description
                                ? product.description
                                : "mô tả"}
                        </p>
                        {/* <p>
              t has survived not only fiveLorem Ipsum is simply dummy text of
              the printing and typesetting industry. Lorem Ipsum has been the
              industry's printer took a galley of type and
            </p> */}
                        <ul>
                            {/* <li>
                <span className="name">Digital List Price</span>
                <span className="clm">:</span>
                <span className="price">$4.71</span>
              </li>
              <li>
                <span className="name">Print List Price</span>
                <span className="clm">:</span>
                <span className="price">$10.99</span>
              </li> */}
                            <li>
                                <span className="name">Price</span>
                                <span className="clm">:</span>
                                <span className="price final">
                                    {product.price}đ
                                </span>
                            </li>
                            {/* <li>
                <span className="save-cost">Save $7.62 (69%)</span>
              </li> */}
                        </ul>
                        <div className="btn-sec">
                            <button className="btn" onClick={addProductToCart}>
                                Add To cart
                            </button>

                            <button
                                className="btn black"
                                onClick={() => buyNowHandler(product)}
                            >
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

ProductSection.propTypes = {};

export default ProductSection;
