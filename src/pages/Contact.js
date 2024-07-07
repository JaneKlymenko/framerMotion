import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Row,
  Col,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Button,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";

const Contact = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <motion.div
      className="contact"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
    >
      <h2>Contact</h2>
      <Row>
        <Col>
          <div className="contact-form">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <FormGroup className="mb-3" controlId="validationCustom1">
                <FormLabel>Name</FormLabel>
                <FormControl required type="text" placeholder="Name" />
              </FormGroup>
              <FormGroup className="mb-3" controlId="validationCustom2">
                <FormLabel>Email</FormLabel>
                <FormControl required type="email" placeholder="Email" />
              </FormGroup>
              <FormGroup className="mb-3" controlId="validationCustom3">
                <FormLabel>Message</FormLabel>
                <FormControl required as="textarea" placeholder="Message" />
              </FormGroup>
              <Button type="submit">Submit</Button>
            </Form>
          </div>
        </Col>
        <Col>
          <div className="contact-data">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
              recusandae inventore a autem mollitia accusamus molestiae alias
              aliquid.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
              recusandae inventore a autem mollitia accusamus molestiae alias
              aliquid. Incidunt quaerat blanditiis voluptate fugit recusandae?
              Provident obcaecati laudantium eius architecto ab.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
              recusandae inventore a autem mollitia accusamus molestiae alias
              aliquid. Incidunt quaerat blanditiis voluptate fugit recusandae?
              Provident obcaecati laudantium eius architecto ab.Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Sapiente recusandae
              inventore a autem mollitia accusamus molestiae alias aliquid.
              Incidunt quaerat blanditiis voluptate fugit recusandae? Provident
              obcaecati laudantium eius architecto ab.
            </p>
            <p>
              <ListGroup horizontal>
                <ListGroupItem>
                  <a href="https://youtube.com">YouTube</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="https://youtube.com">Linkedin</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="https://youtube.com">Instagram</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="https://youtube.com">Twitter</a>
                </ListGroupItem>
              </ListGroup>
            </p>
          </div>
        </Col>
      </Row>
    </motion.div>
  );
};

export default Contact;
