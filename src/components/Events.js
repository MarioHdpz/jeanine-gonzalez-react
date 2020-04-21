import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Parallax } from "react-parallax";
import getJson from "../lib/getJson";

import background from "../img/background.jpg";

const EventCard = (props) => (
  <div className="col-sm-12 col-xl-6">
    <Card bg="primary" className="mt-2 mb-2">
      <Card.Header className="font-weight-bold">{props.date}</Card.Header>
      <Card.Body className="bg-white">
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button variant="primary" className="text-dark">
          Reservar mi lugar
        </Button>
      </Card.Body>
    </Card>
  </div>
);
const Events = () => {
  const [events, setEvents] =  useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getJson();
      const events = data.rows.slice(1)
      setEvents(events);
    }
    fetchData();
  }, []);

  return (
    <Parallax blur={2} bgImage={background} bgImageAlt="the cat" strength={200}>
      <div className="container mt-4 mb-4">
        <h2>Próximas sesiones</h2>
        <div className="row justify-content-center">
          {events.map((data) => (
            <EventCard {...data} key={data.date} />
          ))}
        </div>
      </div>
    </Parallax>
  );
};

export default Events;
