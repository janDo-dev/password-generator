import { useContext } from "react";
import { PwGenContext } from "../contexts/PwGenContext";
import { StyledComponentProps } from "../interfaces";
import { capitalizeWord } from "../helpers";
import styled from "styled-components";

interface CharsetSelectorProps extends StyledComponentProps {
  selectorName: string;
  id: string;
  checked: boolean;
}

const PwGenCharsetSelector: React.FC<CharsetSelectorProps> = ({
  selectorName,
  id,
  checked,
  className,
}) => {
  const { updateCharset } = useContext(PwGenContext);

  return (
    <div className={`pwgen-options__charset-selector ${className}`}>
      <label
        className={`charset-selector__label ${checked ? "active" : ""}`}
        htmlFor={selectorName}
      >
        {selectorName === "specialChars"
          ? "Special Characters"
          : capitalizeWord(selectorName)}
        <input
          className="charset-selector__checkbox"
          type="checkbox"
          name={selectorName}
          id={id}
          onChange={(e) => updateCharset && updateCharset(e.target.name)}
          checked={checked}
        />
      </label>
    </div>
  );
};

const StyledPwGenCharsetSelector = styled(PwGenCharsetSelector)`
  .charset-selector__checkbox {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    opacity: 0;
  }

  .charset-selector__label {
    position: relative;
    display: inline-block;
    border-radius: 0.3rem;
    border: 2px solid var(--accent);
    padding: 0.5rem;
    margin: 0.5rem;

    &.active {
      background-color: var(--accent);
    }
  }
`;

export default StyledPwGenCharsetSelector;
