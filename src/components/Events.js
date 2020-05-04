import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Parallax } from "react-parallax";
import moment from "moment";

import background from "../img/background.jpg";

import { formatDate, formatHour } from "../lib/utils";

const EventCard = (props) => {
  const isFull = props.enrolled >= props.quota;
  const seats = props.quota - props.enrolled;

  const handleClick = () => {
    if (!isFull) {
      props.onReservation();
    }
  };

  return (
    <div className="col-sm-12 col-xl-6 py-2">
      <Card className=" mt-2 mb-2 font-weight-bold h-100">
        <Card.Header className="bg-primary font-weight-bold">
          <p className="mb-0 text-uppercase">{formatDate(props.date)} </p>
          <p className="mb-0 text-uppercase">{formatHour(props.hour)}</p>
        </Card.Header>
        <Card.Body className="d-flex flex-column justify-content-between align-items-center">
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          {!isFull && <div className="seats">Lugares restantes: {seats}</div>}
          <Button
            className={`text-dark w-50 ${isFull ? "disabled" : ""}`}
            onClick={() => handleClick()}
          >
            {isFull ? "Cupo lleno" : "Reservar mi lugar"}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
const Events = (props) => {
  const activeEvents = props.events
    .filter((event) => event.active === "TRUE")
    .filter((event) => {
      const [hour, minutes] = event.hour.split(":");
      const datetime = moment(event.date).hour(hour).minute(minutes);
      return datetime > moment();
    }).slice(0, 2);
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
