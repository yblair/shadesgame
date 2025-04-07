import DraggableShape from "./DraggableShape";
import { shapes } from "../constants/shapes";

const Shapes = () => {
  return (
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
  );
};

export default Shapes;
