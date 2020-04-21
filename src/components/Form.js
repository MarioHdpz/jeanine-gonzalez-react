import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Parallax } from "react-parallax";
import axios from "axios";

import background from "../img/background.jpg";

import { formatDate, formatHour } from "../lib/utils";

const EventCard = (props) => (
  <div>
    <Card className=" mt-2 mb-2 font-weight-bold">
      <Card.Header className="bg-primary font-weight-bold">
        <p className="mb-0 text-uppercase">{formatDate(props.date)} </p>
        <p className="mb-0 text-uppercase">{formatHour(props.hour)}</p>
      </Card.Header>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
      </Card.Body>
    </Card>
  </div>
);

const EventForm = (props) => {
  const [formData, setForm] = useState({
    nombre: "",
    correo: "",
    comentarios: "",
  });

  const handleSumbit = async (event) => {
    event.preventDefault();
    const url =
      "https://script.google.com/macros/s/AKfycbzm-XgzVgh4RsDlHmpY5sjOlEtB-VcHKkfaSV299aw2V8dmAg8/exec";
    const serializedData = new URLSearchParams(formData).toString(); 
    await axios.get(url + serializedData );
  };

  const handleChange = (event, key) => {
    setForm({
      ...formData,
      [key]: event.target.value,
    });
  };

  return (
    <Parallax blur={2} bgImage={background} bgImageAlt="the cat" strength={200}>
      <div className="container my-4 col-sm-6">
        <EventCard {...props.event} />
        <Form
          onSubmit={(e) => handleSumbit(e)}
          className="text-left font-weight-bold"
        >
          <Form.Group controlId="nombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="input"
              placeholder="Tu nombre completo"
              required
              value={formData.nombre}
              onChange={(e) => handleChange(e, "nombre")}
            />
          </Form.Group>
          <Form.Group controlId="correo">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control
              type="email"
              placeholder="nombre@ejemplo.com"
              required
              value={formData.correo}
              onChange={(e) => handleChange(e, "correo")}
            />
          </Form.Group>
          <Form.Group controlId="comentarios">
            <Form.Label>Comentarios</Form.Label>
            <Form.Control
              as="textarea"
              rows="5"
              value={formData.comentarios}
              onChange={(e) => handleChange(e, "comentarios")}
            />
          </Form.Group>
          <Button
            variant="outline-danger"
            className="mx-3"
            onClick={() => props.onCancel()}
          >
            Cancelar
          </Button>
          <Button variant="outline-success" type="submit" className="mx-3">
            Registrar
          </Button>
        </Form>
      </div>
    </Parallax>
  );
};

export default EventForm;
