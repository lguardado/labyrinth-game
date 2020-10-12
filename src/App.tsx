// eslint-disable-next-line
import React from "react";
import "./App.css";
import Layout from "./containers/layout/layout";
import Labyrinth from "./containers/labyrinth/labyrinth";

function App() {
  return (
    <Layout>
      <Labyrinth />
      <div
        style={{
          position: "absolute",
          top: "0",
          right: "5px",
          color: "lightgrey",
        }}
      >
        created by Lucas Guardado
      </div>
    </Layout>
  );
}

export default App;
