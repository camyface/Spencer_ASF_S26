import { Row, Col, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomeSection = ({
                         title,
                         text,
                         image,
                         alt,
                         buttonText,
                         buttonLink,
                         imageLeft = false,
                     }) => {
    return (
        <>
            <Row className="align-items-center section-row">
                <Col
                    xs={12}
                    md={6}
                    className={`section-image-col ${
                        imageLeft ? "order-1 order-md-1" : "order-1 order-md-2"
                    }`}
                >
                    <img src={image} alt={alt} className="img-standard img-fluid" />
                </Col>

                <Col
                    xs={12}
                    md={6}
                    className={`section-text-col ${
                        imageLeft ? "order-2 order-md-2" : "order-2 order-md-1"
                    }`}
                >
                    <h2 className="mini-header">{title}</h2>
                    <p>{text}</p>

                    {buttonText && buttonLink && (
                        <Button as={Link} to={buttonLink} className="menu-button">
                            {buttonText}
                        </Button>
                    )}
                </Col>
            </Row>

            <Row className="divider-row">
                <Col xs={2}></Col>
                <Col xs={8} className="card-divider"></Col>
                <Col xs={2}></Col>
            </Row>
        </>
    );
};

export default HomeSection;