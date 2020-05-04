import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

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
    referencia: "",
    telefono: "",
  });
  const [loader, setLoader] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSumbit = async (event) => {
    event.preventDefault();
    setLoader(true);
    const data = { id_sesion: props.formKey, ...formData };
    const url =
      "https://script.google.com/macros/s/AKfycbzm-XgzVgh4RsDlHmpY5sjOlEtB-VcHKkfaSV299aw2V8dmAg8/exec?";
    const serializedData = new URLSearchParams(data).toString();
    await axios.get(url + serializedData);
    setSuccess(true);
  };

  const handleChange = (event, key) => {
    setForm({
      ...formData,
      [key]: event.target.value,
    });
  };

  const form = (
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
      <Form.Group controlId="telefono">
        <Form.Label>Teléfono</Form.Label>
        <Form.Control
          type="phone"
          value={formData.telefono}
          onChange={(e) => handleChange(e, "telefono")}
        />
      </Form.Group>
      <Form.Group controlId="referencia">
        <Form.Label>¿Cómo te enteraste?</Form.Label>
        <Form.Control
          as="textarea"
          rows="3"
          value={formData.referencia}
          onChange={(e) => handleChange(e, "referencia")}
        />
      </Form.Group>
      <div className="text-center">
        <Button
          variant="outline-danger"
          className="mx-3"
          onClick={() => props.onCancel()}
        >
          Cancelar
        </Button>
        <Button
          disabled={loader}
          variant="success"
          type="submit"
          className="mx-3"
        >
          {loader ? (
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          ) : null}
          {loader ? "Registrando" : "Registrarme"}
        </Button>
      </div>
    </Form>
  );

  const successMessage = (
    <Card body>
      ¡Felicidades! Tu registro ha sido exitoso. Por favor revisa tu correo, en
      las próximas horas te llegará información de cómo unirte a nuestras
      sesiones gratuitas.
    </Card>
  );

  return (
    <Parallax blur={2} bgImage={background} bgImageAlt="the cat" strength={200}>
      <div className="container my-4 col-sm-6">
        <EventCard {...props.event} />
        {success ? successMessage : form}
      </div>
    </Parallax>
  );
};

export default EventForm;
