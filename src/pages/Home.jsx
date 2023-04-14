import React from "react";
import NavBar from "../containers/NavBar";
import { MenuComponent } from "../components/MenuComponent";
const Home = () => {
  return (
    <>
      <NavBar />

      <div class="container-fluid">
          <MenuComponent />
      </div>
    </>
  );
};

export default Home;
