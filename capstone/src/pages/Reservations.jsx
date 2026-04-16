import { useState } from "react";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import {object, string, number, date, boolean} from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Reservations = () => {
    const [showModal, setShowModal] = useState(false);
    const [submittedReservation, setSubmittedReservation] = useState(null);

    const formSchema = object({
        full_name: string()
            .max(20, "Maximum of 20 characters.")
            .required("This field is required."),

        email: string()
            .transform((value) => value?.toLowerCase())
            .matches(
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                "Invalid email format."
            )
            .required("This field is required."),

        party_size: number()
            .typeError("Must be a number.")
            .required("This field is required.")
            .min(1, "1 person required at minimum.")
            .max(8, "Maximum party size of 8."),

        date: date().required("This field is required."),

        time: string().required("This field is required."),

        dietary_restrictions: string()
            .optional()
            .max(30, "Cannot exceed 30 characters."),

        seating: string().required("Please select a seating preference."),

        newsletter: boolean().optional(),
    });

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema),
        defaultValues: {
            newsletter: false
        }
    });

    const onSubmit = (data) => {
        setSubmittedReservation(data);
        setShowModal(true);
        reset();
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };



    return (
        <>
            <Container className="py-5">
                <Row className="justify-content-center">
                    <Col md={10} lg={8}>
                        <div className="reservation-card p-4 rounded-4 shadow-sm">
                            <h1 className="mb-4 text-center">Reservations</h1>

                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <Row className="g-3">
                                    <Col md={12}>
                                        <Form.Group controlId="full_name">
                                            <Form.Label>Full Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                {...register("full_name")}
                                                isInvalid={!!errors.full_name}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.full_name?.message}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>

                                    <Col md={12}>
                                        <Form.Group controlId="email">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control
                                                type="email"
                                                {...register("email")}
                                                isInvalid={!!errors.email}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.email?.message}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>

                                    <Col md={6}>
                                        <Form.Group controlId="party_size">
                                            <Form.Label>Party Size</Form.Label>
                                            <Form.Control
                                                type="number"
                                                {...register("party_size")}
                                                isInvalid={!!errors.party_size}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.party_size?.message}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>

                                    <Col md={6}>
                                        <Form.Group controlId="date">
                                            <Form.Label>Date</Form.Label>
                                            <Form.Control
                                                type="date"
                                                {...register("date")}
                                                isInvalid={!!errors.date}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.date?.message}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>

                                    <Col md={6}>
                                        <Form.Group controlId="time">
                                            <Form.Label>Time</Form.Label>
                                            <Form.Control
                                                type="time"
                                                {...register("time")}
                                                isInvalid={!!errors.time}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.time?.message}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>

                                    <Col md={6}>
                                        <Form.Group controlId="dietary_restrictions">
                                            <Form.Label>Dietary Restrictions</Form.Label>
                                            <Form.Control
                                                type="text"
                                                {...register("dietary_restrictions")}
                                                isInvalid={!!errors.dietary_restrictions}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.dietary_restrictions?.message}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>

                                    <Col md={12}>
                                        <Form.Group>
                                            <Form.Label className="d-block">
                                                Seating Preference
                                            </Form.Label>

                                            <Form.Check
                                                inline
                                                type="radio"
                                                label="Bar"
                                                value="bar"
                                                {...register("seating")}
                                                id="seating-bar"
                                                defaultChecked
                                            />
                                            <Form.Check
                                                inline
                                                type="radio"
                                                label="Patio"
                                                value="patio"
                                                {...register("seating")}
                                                id="seating-patio"
                                            />
                                            <Form.Check
                                                inline
                                                type="radio"
                                                label="Dining Room"
                                                value="dining_room"
                                                {...register("seating")}
                                                id="seating-dining-room"
                                            />

                                            {errors.seating && (
                                                <div className="text-danger mt-1">
                                                    {errors.seating.message}
                                                </div>
                                            )}
                                        </Form.Group>
                                    </Col>

                                    <Col md={12}>
                                        <Form.Group>
                                            <Form.Label className="d-block">
                                                Subscribe to Our Newsletter
                                            </Form.Label>

                                            <Form.Check
                                                type="checkbox"
                                                // label="Subscribe to our newsletter"
                                                value=""
                                                {...register("newsletter")}
                                                id="newsletter"
                                            />

                                            {errors.newsletter && (
                                                <div className="text-danger mt-1">
                                                    {errors.newsletter.message}
                                                </div>
                                            )}
                                        </Form.Group>
                                    </Col>

                                    <Col md={12} className="d-flex gap-2 justify-content-center mt-3">
                                        <Button type="submit" className="menu-button">
                                            Submit
                                        </Button>
                                        <Button
                                            type="button"
                                            variant="outline-secondary"
                                            onClick={() => reset()}
                                        >
                                            Reset
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Modal show={showModal} onHide={handleCloseModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Reservation Confirmed</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <h4>Thank you for your reservation.</h4>

                    {submittedReservation && (
                        <div className="mt-3">
                            <p><strong>Name:</strong> {submittedReservation.full_name}</p>
                            <p><strong>Email:</strong> {submittedReservation.email}</p>
                            <p><strong>Party Size:</strong> {submittedReservation.party_size}</p>
                            <p>
                                <strong>Date:</strong>{" "}
                                {submittedReservation.date instanceof Date
                                    ? submittedReservation.date.toLocaleDateString()
                                    : submittedReservation.date}
                            </p>                            <p><strong>Time:</strong> {submittedReservation.time}</p>
                            <p><strong>Seating:</strong> {submittedReservation.seating}</p>
                            <p>
                                <strong>Dietary Restrictions:</strong>{" "}
                                {submittedReservation.dietary_restrictions || "None"}
                            </p>
                            <p>
                                <strong>Newsletter:</strong>{" "}
                                {submittedReservation.newsletter ? "Yes" : "No"}
                            </p>
                        </div>
                    )}
                </Modal.Body>

                <Modal.Footer>
                    <Button className="menu-button" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Reservations;