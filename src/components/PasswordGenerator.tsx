import { useContext } from "react";
import { PwGenContext } from "../contexts/PwGenContext";
import PwGenResult from "./PwGenResult";
import PwGenCharsetSelectors from "./PwGenCharsetSelectors";
import PwGenLengthSlider from "./PwGenLengthSlider";
import Button from "./Button";
import styled from "styled-components";

interface StyledComponentProps {
  className?: string;
}

const PasswordGenerator: React.FC<StyledComponentProps> = ({ className }) => {
  const { generatePassword } = useContext(PwGenContext);

  return (
    <div className={`container ${className}`}>
      <h1 className="pwgen__main-headline">Password Generator</h1>
      <PwGenResult />

      <h2>Choose your character set:</h2>
      <PwGenCharsetSelectors />

      <h2>Password Length:</h2>
      <PwGenLengthSlider />
      <Button text={"Generate new password"} onClick={generatePassword} />
    </div>
  );
};

const StyledPasswordGenerator = styled(PasswordGenerator)`
  h1 {
    color: var(--accent);
    text-transform: uppercase;
  }
`;

export default StyledPasswordGenerator;
