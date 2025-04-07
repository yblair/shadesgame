import DropZone from "./DropZone";
import { containers } from "../constants/containers";

const Containers = () => {
  return (
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
          styles={container.styles}
        />
      ))}
    </div>
  );
};

export default Containers;
