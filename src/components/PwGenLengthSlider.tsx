import { useContext } from "react";
import { PwGenContext } from "../contexts/PwGenContext";

const PwGenLengthSlider: React.FC = () => {
  const { length, updateLength } = useContext(PwGenContext);

  return (
    <input
      type="range"
      name="pw-length"
      id="pw-length-slider"
      value={length.length}
      min={length.lengthMin}
      max={length.lengthMax}
      onChange={(e) => {
        updateLength(e.target.value);
      }}
    />
  );
};

export default PwGenLengthSlider;
