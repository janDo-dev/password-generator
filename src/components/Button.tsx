import { useContext } from "react";
import { PwGenContext } from "../contexts/PwGenContext";

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  const { getNewPassword } = useContext(PwGenContext);

  return <button onClick={getNewPassword}>{text}</button>;
};

export default Button;
