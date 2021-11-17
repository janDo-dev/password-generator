import { useContext } from "react";
import { PwGenContext } from "../contexts/PwGenContext";

const PwGenLengthSlider: React.FC = () => {
  const { length, updateLength } = useContext(PwGenContext);

  return (
    <>
      <label htmlFor="pw-length">{length && length.length}</label>
      <input
        type="range"
        name="pw-length"
        id="pw-length-slider"
        value={length && length.length}
        min={length && length.lengthMin}
        max={length && length.lengthMax}
        onChange={(e) => updateLength && updateLength(Number(e.target.value))}
      />
    </>
  );
};

export default PwGenLengthSlider;
