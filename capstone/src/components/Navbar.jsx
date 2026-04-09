import {Container, Nav, Navbar, NavDropdown, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


const MyNavbar = () => {
    return (

        <>
            <Navbar >
                <Container>
                    <Navbar.Brand href="#">Arbor Oasis</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#">Home</Nav.Link>
                            <Nav.Link href="#">Menu</Nav.Link>
                            <Nav.Link href="#">Reservations</Nav.Link>
                            <Nav.Link href="#">FAQ</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#">Another Action</NavDropdown.Item>
                                <NavDropdown.Item href="#">Something</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default MyNavbar;