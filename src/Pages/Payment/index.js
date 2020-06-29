import React from "react";
import PropTypes from "prop-types";
import styles from "./Payment.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Payment(props) {
    const { form } = styles;

    const productCartList = useSelector((state) => {
        return state.cart.products;
    });

    if (productCartList.length === 0) {
        return (
            <div className="container">
                <p className="text-center">
                    Chưa có sản phẩm nào trong giỏ,{" "}
                    <Link to="products">tiếp tục mua sắm</Link>
                </p>
            </div>
        );
    }

    return (
        <div className="recomended-sec">
            <div className="container">
                <div className="title">
                    <h2>Checkout</h2>
                    <hr />
                </div>
                <div className="row">
                    <div className="col-md-6">
                        {productCartList.map((product, index) => {
                            return (
                                <div className="row" key={index}>
                                    <div
                                        className="col-md-6 item"
                                        style={{
                                            border: "none",
                                        }}
                                    >
                                        <img
                                            // style={{ height: "100%" }}
                                            src={product.img}
                                        />

                                        <div>{product.name}</div>
                                    </div>
                                    <div className="col-md-6 text-left">
                                        <div className="form-group">
                                            <label>Số lượng</label>
                                            <input
                                                className="form-control"
                                                type="number"
                                                defaultValue={1}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Đơn giá: </label>{" "}
                                            <span
                                                style={{
                                                    color: "red",
                                                }}
                                            >
                                                {product.price} đ
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="col-md-6">
                        <div className={form}>
                            <form>
                                <div className="row">
                                    <div className="col-md-12">
                                        <input placeholder="Name" required />
                                    </div>
                                    <div className="col-md-12">
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            required
                                        />
                                    </div>
                                    <div className="col-md-12">
                                        <input
                                            type="text"
                                            name="address"
                                            placeholder="Address"
                                            required
                                        />
                                    </div>
                                    <div className="col-md-12">
                                        <textarea
                                            placeholder="Messege"
                                            defaultValue={""}
                                        />
                                    </div>
                                    <div className="col-md-12">
                                        <button className="btn black">
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Payment.propTypes = {};

export default Payment;
