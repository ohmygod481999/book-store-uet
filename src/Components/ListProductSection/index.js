import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct, toggleCart } from "../../actions/cart.action";
import { toast, ToastContainer } from "react-toastify";

function ListProductSection(props) {
    let { products, title, max } = props;

    const dispatch = useDispatch();

    const addCardHandler = (e, product) => {
        e.preventDefault();
        const action = addProduct(product);
        dispatch(action);
        dispatch(toggleCart(true));
    };

    if (max) {
        products = products.slice(0, max);
    }

    const renderProducts = products ? (
        products.map((product, index) => {
            return (
                <div key={index} className="col-lg-2 col-md-3 col-sm-4">
                    <div className="item">
                        <Link to={`/product/${product.id}`}>
                            <img src={product.img} alt="img" />
                        </Link>
                        <h3>
                            <Link to={`/product/${product.id}`}>
                                {product.name}
                            </Link>
                        </h3>
                        <h6>
                            <span className="price">{product.price} đ</span> /{" "}
                            <a
                                href="#"
                                onClick={(e) => {
                                    addCardHandler(e, product);
                                }}
                            >
                                Add to card
                            </a>
                        </h6>
                    </div>
                </div>
            );
        })
    ) : (
        <p>không có sản phẩm nào.</p>
    );

    return (
        <section className="recent-book-sec">
            <div className="container">
                <div className="title">
                    <h2>{title}</h2>
                    <hr />
                </div>
                <div className="row">{renderProducts}</div>
                {max ? (
                    <div className="btn-sec">
                        <Link to="/products" className="btn gray-btn">
                            View all books
                        </Link>
                    </div>
                ) : null}
            </div>
        </section>
    );
}

ListProductSection.propTypes = {
    products: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
};

export default ListProductSection;
