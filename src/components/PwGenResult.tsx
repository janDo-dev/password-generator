import { useContext, useEffect } from "react";
import { PwGenContext } from "../contexts/PwGenContext";

const PwGenResult: React.FC = () => {
  const { charsets, length, password, getNewPassword } =
    useContext(PwGenContext);

  useEffect(() => {
    getNewPassword();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [charsets, length]);

  return <div className="pw-gen__result">{password}</div>;
};

export default PwGenResult;