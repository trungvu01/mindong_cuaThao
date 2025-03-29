import { Fragment } from "react";
import Wrapper from "../components/wrapper/Wrapper";
import Section from "../components/Section";
import { products, discoutProducts } from "../utils/products";
import SliderHome from "../components/Slider";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";

const Home = () => {
    const newArrivalData = products
        .filter((item) => item.category === "phu-kien")
        .slice(0, 3)
        .concat(
            products.filter((item) => item.category === "phu-kien").slice(-3)
        );
    const bestSales = products
        .filter((item) => item.category === "luoc")
        .slice(0, 8);
    useWindowScrollToTop();
    return (
        <Fragment>
            <SliderHome />
            <Wrapper />
            <Section
                title="Được yêu thích"
                bgColor="#fbf1e9"
                productItems={bestSales}
            />
            <Section
                title="Giảm giá"
                bgColor="white"
                productItems={discoutProducts}
            />
            <Section
                title="Xu hướng mới"
                bgColor="#fbf1e9"
                productItems={newArrivalData}
            />
        </Fragment>
    );
};

export default Home;
