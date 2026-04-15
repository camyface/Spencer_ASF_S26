import { useState } from "react";
import {
    Col,
    Container,
    Dropdown,
    DropdownButton,
    Row,
    Toast,
    ToastContainer,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import MyNavbar from "../components/Navbar";
import MenuSection from "../components/MenuPageComponents/MenuSection.jsx";
import { menuData } from "../data/menuItems.js";
import { useCart } from "../context/CartContext";
import scallopsImage from "../assets/images/scallops.jpg";

const sectionTitles = {
    breakfast: "Breakfast",
    lunch: "Lunch",
    appetizer: "Appetizers",
    dinner: "Dinner",
    dessert: "Desserts",
};

const MenuPage = () => {
    const [filter, setFilter] = useState("all");
    const [showToast, setShowToast] = useState(false);
    const { addToCart } = useCart();

    const handleAddToCart = (id, qty) => {
        addToCart(id, qty);
        setShowToast(true);
    };

    const visibleKeys = filter === "all" ? Object.keys(menuData) : [filter];

    return (
        <>
            <ToastContainer position="top-end" className="p-3" style={{ zIndex: 1050 }}>
                <Toast
                    bg="success"
                    show={showToast}
                    onClose={() => setShowToast(false)}
                    delay={2200}
                    autohide
                >
                    <Toast.Body className="text-white">
                        Item added to <Link to="/cart" className="cart-toast-link">cart!</Link>
                    </Toast.Body>
                </Toast>
            </ToastContainer>

            <Container fluid>
                <Row>
                    <Col>
                        <div className="div-block">
                            <p className="div-block-content menu-intro">
                                Our menu is thoughtfully crafted to celebrate the beauty and richness
                                of seasonal ingredients, combining refined culinary techniques with
                                the natural flavors of the land and sea. Each dish highlights fresh
                                produce, sustainably sourced seafood, and premium cuts prepared with
                                care and creativity. Inspired by the tranquility of nature and the
                                elegance of resort dining, our selections are designed to provide a
                                balanced and memorable experience, where every course reflects both
                                sophistication and a deep appreciation for fresh, natural ingredients.
                            </p>
                        </div>
                    </Col>
                </Row>

                <Row className="justify-content-center menu-filter-row">
                    <Col xs="auto">
                        <DropdownButton
                            id="menu-filter"
                            title="Menu"
                            className="text-center"
                            menuVariant="light"
                        >
                            <Dropdown.Item onClick={() => setFilter("all")}>All</Dropdown.Item>
                            <Dropdown.Item onClick={() => setFilter("breakfast")}>Breakfast</Dropdown.Item>
                            <Dropdown.Item onClick={() => setFilter("lunch")}>Lunch</Dropdown.Item>
                            <Dropdown.Item onClick={() => setFilter("appetizer")}>Appetizer</Dropdown.Item>
                            <Dropdown.Item onClick={() => setFilter("dinner")}>Dinner</Dropdown.Item>
                            <Dropdown.Item onClick={() => setFilter("dessert")}>Desserts</Dropdown.Item>
                        </DropdownButton>
                    </Col>
                </Row>
            </Container>

            <Container>
                {visibleKeys.map((key) => (
                    <MenuSection
                        key={key}
                        title={sectionTitles[key]}
                        items={menuData[key]}
                        onAddToCart={handleAddToCart}
                    />
                ))}
            </Container>

            <div className="menu-image-wrapper">
                <img
                    className="menu-image"
                    src={scallopsImage}
                    alt="scallops on plate"
                />
            </div>
        </>
    );
};

export default MenuPage;