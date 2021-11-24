import { useContext } from "react";
import { PwGenContext } from "../contexts/PwGenContext";
import { StyledComponentProps } from "../interfaces";
import styled from "styled-components";

const PwGenLengthSlider: React.FC<StyledComponentProps> = ({ className }) => {
  const { length, updateLength } = useContext(PwGenContext);

  return (
    <>
      <h2 className="pwgen-options__headline">Password Length:</h2>
      <div className={`pwgen-options__length-slider ${className}`}>
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
      </div>
    </>
  );
};

const StyledPwGenLengthSlider = styled(PwGenLengthSlider)`
  padding: 0 0.5rem;
  margin: 0 auto 3rem;

  label {
    display: block;
  }

  input[type="range"] {
    width: 100%;
  }
`;

export default StyledPwGenLengthSlider;
