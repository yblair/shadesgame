import { useDrop } from "react-dnd";
import { useState } from "react";

const DropZone = ({ type, label, styles }) => {
  const [count, setCount] = useState(0);
  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: type,
    drop: () => setCount(count + 1),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }));
  console.log("count", count);
  return (
    <div
      ref={drop}
      className="drop-zone"
      style={{
        ...styles,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ color: "#666" }}></div>
        {isOver && <div style={{ color: "white" }}></div>}
      </div>
    </div>
  );
};

export default DropZone;
