import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Footer(props) {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="address">
                            <h4>Our Address</h4>
                            <h6>17 ngõ 622/41 Minh Khai</h6>
                            <h6>Call : 082 940 0301</h6>
                            <h6>Email : vuongbaolong48@gmail.com</h6>
                        </div>
                        <div className="timing">
                            <h4>Timing</h4>
                            <h6>Mon - Fri: 7am - 10pm</h6>
                            <h6>​​Saturday: 8am - 10pm</h6>
                            <h6>​Sunday: 8am - 11pm</h6>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="navigation">
                            <h4>Navigation</h4>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/products">Product</Link></li>
                            </ul>
                        </div>
                        {/* <div className="navigation">
                            <h4>Help</h4>
                            <ul>
                                <li><a href="">Shipping &amp; Returns</a></li>
                                <li><a href="privacy-policy.html">Privacy</a></li>
                                <li><a href="faq.html">FAQ’s</a></li>
                            </ul>
                        </div> */}
                    </div>
                    <div className="col-md-5">
                        <div className="form">
                            <h3>Quick Contact us</h3>
                            <h6>We are now offering some good discount
            on selected books go and shop them</h6>
                            <form>
                                <div className="row">
                                    <div className="col-md-6">
                                        <input placeholder="Name" required />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="email" placeholder="Email" required />
                                    </div>
                                    <div className="col-md-12">
                                        <textarea placeholder="Messege" defaultValue={""} />
                                    </div>
                                    <div className="col-md-12">
                                        <button className="btn black">Alright, Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copy-right">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h5>(C) 2020. All Rights Reserved. UET BookStore</h5>
                        </div>
                        <div className="col-md-6">
                            <div className="share align-middle">
                                <span className="fb"><i className="fa fa-facebook-official" /></span>
                                <span className="instagram"><i className="fa fa-instagram" /></span>
                                <span className="twitter"><i className="fa fa-twitter" /></span>
                                <span className="pinterest"><i className="fa fa-pinterest" /></span>
                                <span className="google"><i className="fa fa-google-plus" /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

Footer.propTypes = {

}

export default Footer

