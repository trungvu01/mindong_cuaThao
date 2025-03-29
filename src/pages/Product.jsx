import { Fragment, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ShopList from "../components/ShopList";
import { products } from "../utils/products";
import { useParams } from "react-router-dom";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import ProductReviews from "../components/ProductReviews/ProductReviews";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";

const Product = () => {
    const { id } = useParams();
    const [selectedProduct, setSelectedProduct] = useState(
        products.filter((item) => parseInt(item.id) === parseInt(id))[0]
    );
    const [relatedProducts, setRelatedProducts] = useState([]);
    useEffect(() => {
        window.scrollTo(0, 0);
        setSelectedProduct(
            products.filter((item) => parseInt(item.id) === parseInt(id))[0]
        );
        setRelatedProducts(
            products.filter(
                (item) =>
                    item.category === selectedProduct?.category &&
                    item.id !== selectedProduct?.id
            )
        );
    }, [selectedProduct, id]);

    useWindowScrollToTop();

    const separateStyles = {
        display: "block",
        width: "30%",
        height: "3px",
        marginBottom: "52px",
        borderRadius: "99px",
        background: "#432818",
    };

    return (
        <Fragment>
            <ProductDetails selectedProduct={selectedProduct} />
            <ProductReviews selectedProduct={selectedProduct} />
            <section className="related-products">
                <Container>
                    <span style={separateStyles}></span>
                    <h3 style={{ color: "#260701" }}>Sản phẩm liên quan</h3>
                </Container>
                <ShopList productItems={relatedProducts} />
            </section>
        </Fragment>
    );
};

export default Product;
