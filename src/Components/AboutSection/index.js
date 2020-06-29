import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function AboutSection(props) {
    return (
        <section className="about-sec">
            <div className="about-img">
                <figure
                    style={{
                        background: "url(./images/about-img.jpg)no-repeat",
                    }}
                />
            </div>
            <div className="about-content">
                <h2>About UET bookstore,</h2>
                <p>
                    Chúng tôi đam mê đọc sách, với tâm nguyện cả đời là cống
                    hiến sức lực để mang được tri thức cho cuộc sống này{" "}
                </p>
                <p>
                    Các bạn nên mua sách của chúng tôi, bởi vì chúng tôi rất đẹp
                    trai và cống hiến
                </p>
                <p>
                    CEO: <i>Vương Bảo Long</i>
                </p>
                <div className="btn-sec">
                    <Link to="/products" className="btn yellow">
                        shop books
                    </Link>
                    <Link to="/login" className="btn black">
                        subscriptions
                    </Link>
                </div>
            </div>
        </section>
    );
}

AboutSection.propTypes = {};

export default AboutSection;
