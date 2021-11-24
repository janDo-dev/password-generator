import { StyledButtonProps } from "../interfaces";
import styled from "styled-components";

const Button: React.FC<StyledButtonProps> = ({ text, onClick, className }) => {
  const handleClick = () => onClick && onClick();

  return (
    <button className={className} onClick={handleClick}>
      {text}
    </button>
  );
};

const StyledButton = styled(Button)`
  background-color: var(--accent);
  color: #fff;
  font-size: 1.125rem;
  font-weight: 700;
  border-radius: 0.3rem;
  border: none;
  padding: 1rem;
  cursor: pointer;
`;

export default StyledButton;
