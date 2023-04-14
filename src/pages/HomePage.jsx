import React, { useEffect, useState } from "react";
import NavBarComponent from "../components/NavBarComponent";
import FooterComponent from "../components/FooterComponent";
// import CardMenuComponent from "../components/CardMenuComponent";
import "./HomeStyle.css";
import { getPlatillos } from "../services/Platillos";
import CardBoot from "../components/CardBoot";

const HomePage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getPlatillos().then((response) => {
      setData(response);
    });
  }, []);

  return (
    <div>
      <NavBarComponent />
      <div className="grid-container">
        {!data ? (
          <h1>Cargando...</h1>
        ) : (
          data.map((platillo) => {
            return (
              <div className="grid-item">
                {/* <CardMenuComponent platillo={platillo} /> */}
                <CardBoot/>
              </div>
            );
          })
        )}
      </div>
      <FooterComponent />
    </div>
  );
};

export { HomePage };
