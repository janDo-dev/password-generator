import { useContext, useEffect } from "react";
import { PwGenContext } from "../contexts/PwGenContext";
import { StyledComponentProps } from "../interfaces";
import styled from "styled-components";

const PwGenResult: React.FC<StyledComponentProps> = ({ className }) => {
  const { charsets, length, password, generatePassword } =
    useContext(PwGenContext);

  useEffect(() => {
    generatePassword && generatePassword();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [charsets, length]);

  return <div className={`pw-gen-result ${className}`}>{password}</div>;
};

const StyledPwGenResult = styled(PwGenResult)`
  background-color: rgba(255 255 255 / 0.1);
  padding: 1rem;
  margin-bottom: 3rem;
`;

export default StyledPwGenResult;
