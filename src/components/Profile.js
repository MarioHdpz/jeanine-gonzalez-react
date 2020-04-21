import React from "react";
import profilePic from "../img/profile.png";

function Profile() {
  return (
    <section className="profile py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-6 col-md-3">
            <div className="">
              <img
                className="img-fluid"
                src={profilePic}
                alt="Sesión de yoga"
              />
            </div>
          </div>
          <div className="col-sm-6 col-md-9">
            <div>
              <h1 className="display-6">Jeanine Gonzalez</h1>
              <ul className="info">
                <li>
                  Licenciada en Administración de Empresas con Maestría en
                  Psicoterapia Humanista y estudios en Psicología Infantil.
                </li>
                <li>
                  Maestra de Yoga Restaurativo y Yoga con especialidad en niños.
                </li>
                <li>Miembro del Instituto Mexicano de Yoga.</li>
                <li>Maestra de Conciencia y Desarrollo Mental.</li>
                <li>
                  Ha dedicado gran parte de su vida al trabajo con grupos.
                </li>
                <li>
                  Fundadora del programa yoga, meditación y mindfulness en las
                  escuelas.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
