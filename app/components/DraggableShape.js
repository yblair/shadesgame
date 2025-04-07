import { useDrag } from "react-dnd";
import { shapeStyles } from "../constants/shapes";

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
        opacity: isDragging ? 0.5 : 1,
      }}
    ></div>
  );
};

export default DraggableShape;
