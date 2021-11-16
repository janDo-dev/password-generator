import { useContext } from "react";
import { PwGenContext } from "../contexts/PwGenContext";
import PwGenCharsetSelector from "./PwGenCharsetSelector";

const PwGenCharsetSelectors: React.FC = () => {
  const { charsets } = useContext(PwGenContext);
  const charsetKeys = Object.keys(charsets);

  return (
    <>
      {charsetKeys.map((charset: string) => (
        <PwGenCharsetSelector
          key={charset}
          selectorName={charset}
          id={`charset-${charset}-toggle`}
          checked={charsets[charset].isActive}
        />
      ))}
    </>
  );
};

export default PwGenCharsetSelectors;
