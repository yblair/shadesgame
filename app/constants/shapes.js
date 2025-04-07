export const shapes = [
  { id: 1, type: "circle" },
  { id: 2, type: "square" },
  { id: 3, type: "triangle" },
  { id: 4, type: "rectangle" },
  { id: 5, type: "circle" },
  { id: 6, type: "square" },
  { id: 7, type: "triangle" },
  { id: 8, type: "rectangle" },
];

export const shapeStyles = {
  circle: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    backgroundColor: "red",
  },
  square: {
    width: 50,
    height: 50,
    backgroundColor: "blue",
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
    backgroundColor: "yellow",
  },
};
