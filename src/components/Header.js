import React, { useState } from "react";

import logo from "../img/logo.png";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

import { InlineWidget, CalendlyEventListener } from "react-calendly";

const CallToAction = (props) => (
  <div className="col-lg-6 my-2 d-flex flex-column justify-content-between">
    <h2 className="masthead-subheading">{props.title}</h2>
    <div className="action-button-container">
      <Button
        onClick={() => props.action()}
        className="action-button text-dark font-weight-bold"
      >
        {props.buttonText}
        <i></i>
      </Button>
    </div>
  </div>
);

const Header = (props) => {
  const [calendlyOpened, openCalendly] = useState(false);
  const [loader, setLoader] = useState(true);

  if (calendlyOpened) {
    return (
      <header className="calendly-container text-center">
        <CalendlyEventListener onProfilePageViewed={() => setLoader(false)}>
          {loader && (
            <Spinner
              as="span"
              animation="grow"
              size="lg"
              role="status"
              aria-hidden="true"
              className="calendly-loader"
            />
          )}
          <InlineWidget url="https://calendly.com/mariohd/asesoria" />
        </CalendlyEventListener>
      </header>
    );
  }

  return (
    <header className="masthead text-center">
      <div className="masthead-content h-100">
        <div className="w-100">
          <img className="img-fluid mt-4" src={logo} alt="Jeanine Gonzalez" />
        </div>
        <div className="container d-flex flex-column justify-content-center">
          <h1 className="masthead-heading mt-3 mb-5">
            Aprendiendo a respirar para sanar
          </h1>
          <div className="row">
            <CallToAction
              title="Acompañamiento psicoterapéutico"
              buttonText="Haz tu cita aquí"
              action={() => openCalendly(true)}
            />
            <CallToAction
              title="Sesiones Mindfulness"
              buttonText="Conoce más"
              action={props.onAction}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
