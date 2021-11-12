import { useContext } from "react";
import PwGenCharsetSelector from "./PwGenCharsetSelector";
import { PwGenContext } from "../PwGenContext";

const PwGenCharsetSelectors: React.FC = () => {
  const { charsets, charsetStates } = useContext(PwGenContext);

  return (
    <>
      {charsets.map((charset: string) => (
        <PwGenCharsetSelector
          selectorName={`charset-${charset}`}
          id={`charset-${charset}-toggle`}
          checked={charsetStates[charset]}
        />
      ))}
    </>
  );
};

export default PwGenCharsetSelectors;
