import PwGenResult from "./PwGenResult";
import PwGenCharsetSelectors from "./PwGenCharsetSelectors";
import PwGenLengthSlider from "./PwGenLengthSlider";
import Button from "./Button";
import { PwGenProvider } from "../contexts/PwGenContext";

const PasswordGenerator: React.FC = () => {
  return (
    <div className="container">
      <PwGenProvider>
        <h1 className="pwgen__main-headline">Password Generator</h1>
        <PwGenResult />

        <h2>Choose your character set:</h2>
        <PwGenCharsetSelectors />

        <h2>Password Length:</h2>
        <PwGenLengthSlider />
        <Button text={"Generate new password"} />
      </PwGenProvider>
    </div>
  );
};

export default PasswordGenerator;
