import { useContext } from "react";
import { PwGenContext } from "../contexts/PwGenContext";
import { StyledComponentProps } from "../interfaces";
import StyledPwGenCharsetSelector from "./PwGenCharsetSelector";
import styled from "styled-components";

const PwGenCharsetSelectors: React.FC<StyledComponentProps> = ({
  className,
}) => {
  const { charsets } = useContext(PwGenContext);
  const charsetKeys = Object.keys(charsets || {});

  return (
    <>
      <h2 className="pwgen-options__headline">Choose your character set:</h2>
      <div className={`pwgen-options__charset-selectors ${className}`}>
        {charsetKeys.map((charset: string) => (
          <StyledPwGenCharsetSelector
            key={charset}
            selectorName={charset}
            id={`charset-${charset}-toggle`}
            checked={(charsets && charsets[charset].isActive) || false}
          />
        ))}
      </div>
    </>
  );
};

const StyledPwGenCharsetSelectors = styled(PwGenCharsetSelectors)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

export default StyledPwGenCharsetSelectors;
