import { useContext } from "react";
import { PwGenContext } from "../contexts/PwGenContext";
import { StyledComponentProps } from "../interfaces";
import StyledPwGenResult from "./PwGenResult";
import StyledPwGenCharsetSelectors from "./PwGenCharsetSelectors";
import StyledPwGenLengthSlider from "./PwGenLengthSlider";
import Button from "./Button";
import styled from "styled-components";

const PasswordGenerator: React.FC<StyledComponentProps> = ({ className }) => {
  const { generatePassword } = useContext(PwGenContext);

  return (
    <div className={`container ${className}`}>
      <h1 className="pwgen__main-headline">
        Password
        <br /> Generator
      </h1>
      <section className="pwgen-result">
        <StyledPwGenResult />
      </section>

      <section className="pwgen-options">
        <StyledPwGenCharsetSelectors />
        <StyledPwGenLengthSlider />
        <Button text={"Generate new password"} onClick={generatePassword} />
      </section>
    </div>
  );
};

const StyledPasswordGenerator = styled(PasswordGenerator)`
  .pwgen__main-headline {
    font-size: 1.3rem;
    color: var(--accent);
    text-transform: uppercase;
    letter-spacing: 0.3rem;
    margin-bottom: 1.5rem;

    br {
      @media (min-width: 769px) {
        display: none;
      }
    }
  }

  .pwgen-options__headline {
    font-size: 1.15rem;
    font-weight: 400;
    margin-bottom: 0.5rem;
  }
`;

export default StyledPasswordGenerator;
