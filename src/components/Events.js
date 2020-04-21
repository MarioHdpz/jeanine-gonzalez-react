import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Parallax } from "react-parallax";
import getJson from "../lib/getJson";

import background from "../img/background.jpg";

const formatDate = (stringDate) => {
  const parts = stringDate.split("-");
  const date = new Date(parts[0], parts[1] - 1, parts[2]);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("es-MX", options);
};

const formatHour = (hours, minutes) => {
  const ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
};

const EventCard = (props) => (
  <div className="col-sm-12 col-xl-6">
    <Card className=" mt-2 mb-2 font-weight-bold">
      <Card.Header className="bg-primary font-weight-bold">
        <p className="mb-0 text-uppercase">{formatDate(props.date)} </p>
        <p className="mb-0 text-uppercase">
          {formatHour(props.hour, props.minute)}
        </p>
      </Card.Header>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button className="text-dark">Reservar mi lugar</Button>
      </Card.Body>
    </Card>
  </div>
);
const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getJson();
      const events = data.rows.slice(1);
      setEvents(events);
    }
    fetchData();
  }, []);

  return (
    <Parallax blur={2} bgImage={background} bgImageAlt="the cat" strength={200}>
      <div className="events container mt-4 mb-4">
        <h1>Próximas sesiones</h1>
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
