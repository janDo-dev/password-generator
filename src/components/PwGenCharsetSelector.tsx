interface CharsetSelectorProps {
  selectorName: string;
  id: string;
  checked: boolean;
}

const PwGenCharsetSelector: React.FC<CharsetSelectorProps> = ({
  selectorName,
  checked,
}) => {
  return <input type="checkbox" name={selectorName} id="" checked={checked} />;
};

export default PwGenCharsetSelector;
