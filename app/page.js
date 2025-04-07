"use client";
import React from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const shapes = [
  { id: 1, type: "circle", color: "red", width: 50, height: 50 },
  { id: 2, type: "square", color: "blue", width: 50, height: 50 },
  { id: 3, type: "triangle", color: "green", width: 50, height: 50 },
  { id: 4, type: "rectangle", color: "yellow", width: 70, height: 40 },
  { id: 5, type: "circle", color: "red", width: 50, height: 50 },
  { id: 6, type: "square", color: "blue", width: 50, height: 50 },
  { id: 7, type: "triangle", color: "green", width: 50, height: 50 },
  { id: 8, type: "rectangle", color: "yellow", width: 70, height: 40 },
];

const containers = [
  {
    type: "circle",
    label: "Círculos",
    color: "red",
    styles: {
      width: 150,
      height: 150,
      borderRadius: "100%",
    },
  },
  {
    type: "square",
    label: "Cuadrados",
    color: "blue",
    styles: {
      width: 150,
      height: 150,
    },
  },
  {
    type: "triangle",
    label: "Triángulos",
    color: "green",
    styles: {
      width: 75,
      height: 150,
      borderLeft: "25px solid transparent",
      borderRight: "25px solid transparent",
      borderBottom: "50px solid",
    },
  },
  {
    type: "rectangle",
    label: "Rectángulos",
    color: "yellow",
    styles: {
      width: 90,
      height: 150,
    },
  },
];

const shapeStyles = {
  circle: {
    width: 50,
    height: 50,
    borderRadius: "50%",
  },
  square: {
    width: 50,
    height: 50,
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeft: "25px solid transparent",
    borderRight: "25px solid transparent",
    borderBottom: "50px solid",
    color: "green",
  },
  rectangle: {
    width: 70,
    height: 40,
  },
};

const DraggableShape = ({ shape }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: shape.type,
    item: { id: shape.id, type: shape.type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`shape ${shape.type}`}
      style={{
        ...shapeStyles[shape.type],
        backgroundColor: shape.color,
        opacity: isDragging ? 0.5 : 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "grab",
      }}
    ></div>
  );
};

const DropZone = ({ type, label, color, styles }) => {
  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: type,
    drop: (item) => console.log(`Dropped shape ${item.id} into ${type}`),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }));

  return (
    <div
      ref={drop}
      className="drop-zone"
      style={{
        ...styles,
        backgroundColor: isOver ? "rgba(0,0,0,0.1)" : "white",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px",
        }}
      >
        <div style={{ marginBottom: "10px", color: "#666" }}>{label}</div>
        {isOver && <div style={{ color: "green" }}>¡Suelta aquí!</div>}
      </div>
    </div>
  );
};

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
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              justifyContent: "center",
            }}
          >
            {shapes.map((shape) => (
              <DraggableShape key={shape.id} shape={shape} />
            ))}
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              justifyContent: "center",
            }}
          >
            {containers.map((container) => (
              <DropZone
                key={container.type}
                type={container.type}
                label={container.label}
                color={container.color}
                styles={container.styles}
              />
            ))}
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default ShapeMatchingGame;
