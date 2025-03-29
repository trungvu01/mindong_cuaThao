import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../../app/features/cart/cartSlice";
import "./product-details.css";

const ProductDetails = ({ selectedProduct }) => {
    const dispatch = useDispatch();

    const [quantity, setQuantity] = useState(1);
    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    };
    const handelAdd = (selectedProduct, quantity) => {
        dispatch(addToCart({ product: selectedProduct, num: quantity }));
        toast.success("Sản phẩm đã được thêm vào giỏ hàng!");
    };

    return (
        <section className="product-page">
            <Container>
                <Row className="justify-content-center">
                    <Col md={6}>
                        <img
                            loading="lazy"
                            src={selectedProduct?.imgUrl}
                            alt=""
                        />
                    </Col>
                    <Col md={6} style={{ paddingLeft: "48px" }}>
                        <h2>{selectedProduct?.productName}</h2>
                        <div className="rate">
                            <div className="stars">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>
                            <span>{selectedProduct?.avgRating} đánh giá</span>
                        </div>
                        <div className="info">
                            <span className="price">
                                {selectedProduct?.price}.000 đ
                            </span>
                            <span>category:{selectedProduct?.category}</span>
                        </div>
                        <p>{selectedProduct?.shortDesc}</p>
                        <input
                            className="qty-input"
                            type="number"
                            placeholder="Qty"
                            value={quantity}
                            onChange={handleQuantityChange}
                        />
                        <button
                            aria-label="Add"
                            type="submit"
                            className="add"
                            onClick={() => handelAdd(selectedProduct, quantity)}
                        >
                            Thêm vào giỏ hàng
                        </button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ProductDetails;
