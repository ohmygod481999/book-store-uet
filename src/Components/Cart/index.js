import React, { useState, useEffect, Fragment, useRef } from "react";
import PropTypes from "prop-types";
import styles from "./Cart.module.css";
import { useSelector, useDispatch } from "react-redux";
// import casual from "casual";
import {
    addProduct,
    deleteProduct,
    toggleCart,
} from "../../actions/cart.action";
import { Link } from "react-router-dom";

function useOnClickOutside(ref, handler) {
    useEffect(
        () => {
            const listener = (event) => {
                // Do nothing if clicking ref's element or descendent elements
                if (!ref.current || ref.current.contains(event.target)) {
                    return;
                }

                handler(event);
            };

            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);

            return () => {
                document.removeEventListener("mousedown", listener);
                document.removeEventListener("touchstart", listener);
            };
        },
        // Add ref and handler to effect dependencies
        // It's worth noting that because passed in handler is a new ...
        // ... function on every render that will cause this effect ...
        // ... callback/cleanup to run every render. It's not a big deal ...
        // ... but to optimize you can wrap handler in useCallback before ...
        // ... passing it into this hook.
        [ref, handler]
    );
}

function Cart(props) {
    const { cart, cartPanel, show, hide } = styles;
    const wrapperRef = useRef();

    // useOnClickOutside(wrapperRef, () => dispatch(toggleCart(false)));

    const productCartList = useSelector((state) => state.cart.products);
    const isCartOpen = useSelector((state) => state.cart.isOpen);
    console.log(productCartList);

    const dispatch = useDispatch();

    const toggle = () => {
        const action = toggleCart();
        dispatch(action);
    };

    const deleteCartProductHandler = (e, product) => {
        const action = deleteProduct(product.id);

        dispatch(action);
    };

    return (
        <div className={`${cart} `} ref={wrapperRef}>
            <button className="btn p-2" onClick={toggle}>
                <i
                    className="fa fa-shopping-cart"
                    style={{
                        fontSize: "25px",
                    }}
                    aria-hidden="true"
                ></i>
            </button>
            <div>
                <div className={`${cartPanel} ${isCartOpen ? show : hide}`}>
                    <div
                        style={{
                            paddingLeft: "50px",
                            paddingRight: "50px",
                            paddingTop: "20px",
                        }}
                    >
                        <div className="title">
                            <h3>Giỏ hàng</h3>
                            <hr />
                        </div>

                        {productCartList.map((product, i) => {
                            return (
                                <div key={i} className="row mb-3">
                                    <div className="col-md-6">
                                        <div className="item">
                                            <img src={product.img} alt="img" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <h3>
                                            <Link
                                                style={{
                                                    color: "black",
                                                }}
                                                to={`/product/${product.id}`}
                                            >
                                                {product.name}
                                            </Link>
                                        </h3>
                                        <h6>
                                            <span className="price">
                                                {product.price} đ
                                            </span>
                                        </h6>
                                        <a
                                            href="#"
                                            onClick={(e) => {
                                                deleteCartProductHandler(
                                                    e,
                                                    product
                                                );
                                            }}
                                        >
                                            Remove
                                        </a>
                                    </div>
                                </div>
                            );
                        })}

                        {/* <ul>
                            {productCartList.map((product, i) => (
                                <li
                                    key={i}
                                    onClick={() =>
                                        deleteCartProductHandler(product.id)
                                    }
                                >
                                    {product.name}
                                </li>
                            ))}
                        </ul> */}
                        {productCartList.length > 0 ? (
                            <Link to="/payment">
                                <button className="btn mt-3">Thanh toán</button>
                            </Link>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
}

Cart.propTypes = {};

export default Cart;
