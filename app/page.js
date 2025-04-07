"use client";
import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Shapes from "./components/Shapes";
import Containers from "./components/Containers";

const ShapeMatchingGame = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ maxWidth: "1500px", margin: "0 auto", padding: "20px" }}>
        <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
          ¡Juego de Formas!
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "40px",
          }}
        >
          <Shapes />
          <Containers />
        </div>
      </div>
    </DndProvider>
  );
};

export default ShapeMatchingGame;
