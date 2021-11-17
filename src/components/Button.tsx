interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  const handleClick = () => onClick && onClick();
  return <button onClick={handleClick}>{text}</button>;
};

export default Button;
