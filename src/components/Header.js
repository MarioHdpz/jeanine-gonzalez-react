import React from "react";

import logo from "../img/logo.png";
import Button from "react-bootstrap/Button";

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

const navigateToCalendar = () => {
  window.location.href = "https://calendly.com/mariohd/asesoria";
}

const Header = (props) => {
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
              action={navigateToCalendar}
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
