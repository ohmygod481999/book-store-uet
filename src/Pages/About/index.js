import React from "react";
import PropTypes from "prop-types";
import aboutImg from "../../images/about.jpg";

function About(props) {
    return (
        <section className="static about-sec">
            <div className="container">
                <h1>About Us</h1>
                <div className="img-sec">
                    <img
                        src={`https://scontent.fhan1-1.fna.fbcdn.net/v/l/t1.0-9/87964133_2575517366108761_5639170658102411264_n.jpg?_nc_cat=105&_nc_sid=85a577&_nc_ohc=DlYPG9uAXe4AX-_1rre&_nc_ht=scontent.fhan1-1.fna&oh=40cfc08cc3f41bf5b552fc5f6dc9b46b&oe=5EF7AE85`}
                        alt="about"
                    />
                    <p>
                        Chúng tôi đam mê đọc sách, với tâm nguyện cả đời là cống
                        hiến sức lực để mang được tri thức cho cuộc sống này{" "}
                    </p>
                    <p>
                        Các bạn nên mua sách của chúng tôi, bởi vì chúng tôi rất
                        đẹp trai và cống hiến
                    </p>
                    <p>
                        CEO: <i>Vương Bảo Long</i>
                    </p>
                </div>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only fiveLorem Ipsum
                    is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's printer took a
                    galley of type and scrambled it to make a type specimen
                    book. It has survived not only five
                </p>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only fiveLorem Ipsum
                    is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's printer took a
                    galley of type and scrambled it to make a type specimen
                    book. It has survived not only five
                </p>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five
                </p>
            </div>
        </section>
    );
}

About.propTypes = {};

export default About;
