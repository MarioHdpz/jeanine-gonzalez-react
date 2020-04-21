import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Parallax } from "react-parallax";

import background from "../img/background.jpg";

import { formatDate, formatHour } from "../lib/utils";

const EventCard = (props) => (
  <div className="col-sm-12 col-xl-6 py-2">
    <Card className=" mt-2 mb-2 font-weight-bold h-100">
      <Card.Header className="bg-primary font-weight-bold">
        <p className="mb-0 text-uppercase">{formatDate(props.date)} </p>
        <p className="mb-0 text-uppercase">
          {formatHour(props.hour)}
        </p>
      </Card.Header>
      <Card.Body className="d-flex flex-column justify-content-between align-items-center">
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button className="text-dark w-50" onClick={() => props.onReservation()}>
          Reservar mi lugar
        </Button>
      </Card.Body>
    </Card>
  </div>
);
const Events = (props) => {
  const activeEvents = props.events.filter(event => event.active === "TRUE");

  return (
    <Parallax blur={2} bgImage={background} bgImageAlt="the cat" strength={200}>
      <div className="events container mt-4 mb-4">
        <h1>Próximas sesiones</h1>
        <div className="row justify-content-center">
          {activeEvents.map((data) => {
            return (
              <EventCard
                {...data}
                onReservation={() => props.onReservation(data.key)}
              />
            );
          })}
        </div>
      </div>
    </Parallax>
  );
};

export default Events;
