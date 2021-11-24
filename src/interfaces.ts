export interface StyledComponentProps {
  className?: string;
}

export interface ButtonProps {
  text: string;
  onClick?: () => void;
}

export interface StyledButtonProps extends ButtonProps, StyledComponentProps {}
