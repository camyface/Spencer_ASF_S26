import {Container, Nav, Navbar, NavDropdown, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/images/logo.png'
import {Link} from "react-router-dom";
const MyNavbar = () => {
    return (

        <>
            <Navbar expand={"lg"} className={"custom-navbar"}>
                <Container>
                    <Navbar.Brand>
                        <img
                            alt="arbor oasis logo"
                            src={logo}
                            width="60"
                            height="60"
                            className="d-inline-block align-top"
                        />{' '}
                        Arbor Oasis</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                            <Nav.Link as={Link} to={"/menu"}>Menu</Nav.Link>
                            <Nav.Link as={Link} to={"/reservations"}>Reservations</Nav.Link>
                            <Nav.Link as={Link} to={"/cart"}>
                                <i className={"fa-solid fa-cart-shopping"} ></i>
                            </Nav.Link>
                            {/*<NavDropdown title="Dropdown" id="basic-nav-dropdown">*/}
                            {/*    <NavDropdown.Item href="#">Action</NavDropdown.Item>*/}
                            {/*    <NavDropdown.Item href="#">Another Action</NavDropdown.Item>*/}
                            {/*    <NavDropdown.Item href="#">Something</NavDropdown.Item>*/}
                            {/*    <NavDropdown.Divider/>*/}
                            {/*    <NavDropdown.Item href="#">Separated link</NavDropdown.Item>*/}
                            {/*</NavDropdown>*/}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default MyNavbar;