import { useContext } from "react";
import { PwGenContext } from "../contexts/PwGenContext";
import PwGenResult from "./PwGenResult";
import PwGenCharsetSelectors from "./PwGenCharsetSelectors";
import PwGenLengthSlider from "./PwGenLengthSlider";
import Button from "./Button";

const PasswordGenerator: React.FC = () => {
  const { getNewPassword } = useContext(PwGenContext);

  return (
    <div className="container">
      <h1 className="pwgen__main-headline">Password Generator</h1>
      <PwGenResult />

      <h2>Choose your character set:</h2>
      <PwGenCharsetSelectors />

      <h2>Password Length:</h2>
      <PwGenLengthSlider />
      <Button text={"Generate new password"} onClick={getNewPassword} />
    </div>
  );
};

export default PasswordGenerator;
