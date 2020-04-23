import React from "react";

import logo from "../img/logo.png";
import Button from "react-bootstrap/Button";

const Header = (props) => {
  return (
    <header className="masthead text-center">
      <div className="masthead-content h-100">
        <div className="position-absolute w-100">
          <img className="img-fluid mt-4" src={logo} alt="Jeanine Gonzalez" />
        </div>
        <div className="container h-100 d-flex flex-column justify-content-center">
          <div className="mt-5">
            <h1 className="masthead-heading mb-0">
              Aprendiendo a respirar para sanar
            </h1>
            <h2 className="masthead-subheading mb-0">
              Sesiones de prácticas contemplativas (Mindfulness) para calmar la
              ansiedad, el estrés y los sentimientos de tristeza.
            </h2>
            <div className="action-button-container mt-5">
              <Button
                onClick={() => props.onAction()}
                className="action-button mt-4 text-dark font-weight-bold"
              >
                Registrate Aquí <span>Es Gratis</span>
                <i></i>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
