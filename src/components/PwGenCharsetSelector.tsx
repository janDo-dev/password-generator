import { useContext } from "react";
import { PwGenContext } from "../contexts/PwGenContext";

interface CharsetSelectorProps {
  selectorName: string;
  id: string;
  checked: boolean;
}

const PwGenCharsetSelector: React.FC<CharsetSelectorProps> = ({
  selectorName,
  id,
  checked,
}) => {
  const { updateCharset } = useContext(PwGenContext);

  return (
    <>
      <label htmlFor={selectorName}>{selectorName.toUpperCase()}</label>
      <input
        type="checkbox"
        name={selectorName}
        id={id}
        onChange={(e) => updateCharset(e.target.name)}
        checked={checked}
      />
    </>
  );
};

export default PwGenCharsetSelector;
