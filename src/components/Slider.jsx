import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";

import banner1 from "../Images/banner-1.png";
import banner2 from "../Images/banner-2.png";

const bannerImgs = [banner1, banner2];

const SliderHome = () => {
    const settings = {
        nav: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    return (
        <section className="homeSlide">
            <Container>
                <Slider {...settings}>
                    {bannerImgs.map((banner, index) => {
                        return (
                            <div key={index}>
                                <picture>
                                    <img
                                        src={banner}
                                        style={{
                                            height: "404px",
                                            width: "100%",
                                            objectFit: "cover",
                                            border: "1px solid #fbf1e9",
                                            borderRadius: "20px",
                                        }}
                                        alt=""
                                    />
                                </picture>
                            </div>
                        );
                    })}
                </Slider>
            </Container>
        </section>
    );
};

export default SliderHome;
