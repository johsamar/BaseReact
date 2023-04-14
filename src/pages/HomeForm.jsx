import React from "react";
import NavBar from "../containers/NavBar";
import { PlatilloFormComponent } from "../components/PlatilloFormComponent";

const HomeForm = () => {
  return (
    <>
      <NavBar />

      <div class="container-fluid">
        <PlatilloFormComponent />
      </div>
    </>
  );
};

export { HomeForm };
