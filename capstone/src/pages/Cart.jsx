import { useMemo, useState } from "react";
import {
    Button,
    Col,
    Container,
    Form,
    Modal,
    Row,
    Table,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import MyNavbar from "../components/Navbar";
import { MENU_ITEMS } from "../data/menuItems.js";
import { useCart } from "../context/CartContext";

const money = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});

const TAX_RATE = 0.0825;

const Cart = () => {
    const { cart, updateQuantity, removeFromCart, clearCart } = useCart();

    const [showPlaceOrderModal, setShowPlaceOrderModal] = useState(false);
    const [showCancelModal, setShowCancelModal] = useState(false);
    const [showCancelThanksModal, setShowCancelThanksModal] = useState(false);

    const cartRows = useMemo(() => {
        return Object.keys(cart)
            .map((id) => {
                const menuItem = MENU_ITEMS.find((item) => item.id === Number(id));
                if (!menuItem) return null;

                const qty = cart[id].qty;
                const itemTotal = qty * menuItem.price;

                return {
                    id,
                    name: menuItem.name,
                    qty,
                    itemTotal,
                };
            })
            .filter(Boolean);
    }, [cart]);

    const subtotal = useMemo(() => {
        return cartRows.reduce((sum, row) => sum + row.itemTotal, 0);
    }, [cartRows]);

    const tax = subtotal * TAX_RATE;
    const total = subtotal + tax;

    const handleQtyChange = (id, value) => {
        const parsedQty = Number(value);

        if (Number.isNaN(parsedQty)) return;

        updateQuantity(id, parsedQty);
    };

    const handlePlaceOrder = () => {
        setShowPlaceOrderModal(true);
    };

    const handlePlaceOrderClose = () => {
        setShowPlaceOrderModal(false);
        clearCart();
    };

    const handleCancelOrder = () => {
        setShowCancelModal(true);
    };

    const handleCancelOrderClose = () => {
        setShowCancelModal(false);
    };

    const handleCancelConfirm = () => {
        setShowCancelModal(false);
        clearCart();
        setShowCancelThanksModal(true);
    };

    const handleCancelThanksClose = () => {
        setShowCancelThanksModal(false);
    };

    return (
        <>
            <Container className="py-5">
                <Row>
                    <Col>
                        <Table striped hover responsive>
                            <thead>
                            <tr>
                                <td>Item</td>
                                <td>Qty</td>
                                <td>Total</td>
                                <td></td>
                            </tr>
                            </thead>

                            <tbody>
                            {cartRows.length === 0 ? (
                                <tr id="placeholderCart">
                                    <td colSpan={4} className="text-center">
                                        Your Cart Is Empty
                                    </td>
                                </tr>
                            ) : (
                                cartRows.map((row) => (
                                    <tr key={row.id}>
                                        <td>{row.name}</td>

                                        <td>
                                            <Form.Control
                                                type="number"
                                                min={0}
                                                value={row.qty}
                                                onChange={(e) =>
                                                    handleQtyChange(row.id, e.target.value)
                                                }
                                                style={{ width: "90px" }}
                                            />
                                        </td>

                                        <td>{money.format(row.itemTotal)}</td>

                                        <td>
                                            <i
                                                className="fa-solid fa-xmark"
                                                style={{ cursor: "pointer" }}
                                                onClick={() => removeFromCart(row.id)}
                                            ></i>
                                        </td>
                                    </tr>
                                ))
                            )}
                            </tbody>

                            <tfoot>
                            <tr>
                                <th scope="row">Subtotal</th>
                                <td></td>
                                <td>{money.format(subtotal)}</td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row">Tax</th>
                                <td></td>
                                <td>{money.format(tax)}</td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row">Total</th>
                                <td></td>
                                <td>{money.format(total)}</td>
                                <td></td>
                            </tr>
                            </tfoot>
                        </Table>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row className="justify-content-center">
                    <Col xs="auto">
                        <Button
                            className="menu-button"
                            onClick={handlePlaceOrder}
                            disabled={cartRows.length === 0}
                        >
                            Place Order
                        </Button>
                    </Col>

                    <Col xs="auto">
                        <Button
                            className="menu-button"
                            onClick={handleCancelOrder}
                            disabled={cartRows.length === 0}
                        >
                            Cancel Order
                        </Button>
                    </Col>
                </Row>
            </Container>

            <Modal show={showPlaceOrderModal} onHide={handlePlaceOrderClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title className="text-content">Order Confirmed</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Thank you for placing an order! Your meal will be prepared with the
                    utmost care and professionalism!
                </Modal.Body>
                <Modal.Footer>
                    <Button as={Link} to="/menu" className="menu-button" onClick={handlePlaceOrderClose}>
                        Return
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showCancelModal} onHide={handleCancelOrderClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title className="text-content">Cancel Order</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you would like to cancel your order?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCancelOrderClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={handleCancelConfirm}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal
                show={showCancelThanksModal}
                onHide={handleCancelThanksClose}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title className="text-content">Thank You</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    We eagerly await your future patronage.
                </Modal.Body>
                <Modal.Footer>
                    <Button as={Link} to="/menu" className="menu-button" onClick={handleCancelThanksClose}>
                        Return
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Cart;