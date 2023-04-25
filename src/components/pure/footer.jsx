/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const FooterComponent = () => {
  return (
    <footer className="bg-dark text-light">
      <div className="d-flex p-5 flex-column justify-content-evenly">
        {/* Seccion redes sociales */}
        <section className="d-flex flex-row justify-content-evenly border-bottom pb-2">
          <div>
            <p>Siguenos en nuestras redes sociales: </p>
          </div>
          <div className="grid gap-2">
            <div className="row">
              <div className="col">
                <a href="#">
                  <i className="bi bi-facebook"></i>
                </a>
              </div>
              <div className="col">
                <a href="#">
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
              <div className="col">
                <a href="#">
                  <i className="bi bi-twitter"></i>
                </a>
              </div>
              <div className="col">
                <a href="#">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
              <div className="col">
                <a href="#">
                  <i className="bi bi-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="d-flex flex-row justify-content-evenly mt-2">
          <article>
            <h3>¿Quienes somos?</h3>
            <p>Aliqua amet labore veniam cupidatat occaecat sunt.</p>
          </article>
          <article>
            <h3>Contactanos</h3>
            <p>
              <i className="bi bi-house-door-fill"></i> Manizales, Caldas,
              170003, CO. <br />
              <i className="bi bi-envelope-fill"></i> info@example.com <br />
              <i className="bi bi-telephone-fill"></i> + 01 234 567 88
            </p>
          </article>
        </section>
      </div>
    </footer>
  );
};

export default FooterComponent;
