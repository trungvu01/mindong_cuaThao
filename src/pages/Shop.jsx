import { Col, Container, Row } from "react-bootstrap";
import FilterSelect from "../components/FilterSelect";
import SearchBar from "../components/SeachBar/SearchBar";
import { Fragment, useState } from "react";
import { products } from "../utils/products";
import ShopList from "../components/ShopList";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";

const Shop = () => {
    const [filterList, setFilterList] = useState(products);
    useWindowScrollToTop();

    return (
        <Fragment>
            <section className="filter-bar">
                <Container
                    className="filter-bar-contianer"
                    style={{ marginBottom: "40px" }}
                >
                    <Row className="justify-content-center">
                        <Col md={5}>
                            <SearchBar setFilterList={setFilterList} />
                        </Col>
                        <Col md={4}>
                            <FilterSelect setFilterList={setFilterList} />
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <ShopList productItems={filterList} />
                </Container>
            </section>
        </Fragment>
    );
};

export default Shop;
