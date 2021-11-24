import { createContext, ReactNode, useState } from "react";

interface CharsetContextState {
  [key: string]: {
    [key: string]: string | string[] | boolean;

    name: string;
    values: string[];
    isActive: boolean;
  };
}

interface PwGenProviderProps {
  charsets?: CharsetContextState;
  length?: LengthContextState;
  password?: String;
  updateCharset?: (charset: string) => void;
  updateLength?: (newLenght: number) => void;
  generatePassword?: () => void;
}

interface LengthContextState {
  length: number;
  lengthMin: number;
  lengthMax: number;
}

const initialCharsets: CharsetContextState = {
  lowercase: {
    name: "Lowercase",
    values: Array.from("abcdefghijklmnopqrstuvwxyz"),
    isActive: true,
  },
  uppercase: {
    name: "Uppercase",
    values: Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ"),
    isActive: false,
  },
  numbers: {
    name: "Numbers",
    values: Array.from("0123456789"),
    isActive: false,
  },
  specialChars: {
    name: "Special Characters",
    values: Array.from("!§,;.:-_#+*~§$%&?<>°^"),
    isActive: false,
  },
};

const initialLength: LengthContextState = {
  length: 8,
  lengthMin: 8,
  lengthMax: 35,
};

export const PwGenContext = createContext<PwGenProviderProps>({});

export const PwGenProvider = ({ children }: { children: ReactNode }) => {
  const [charsets, setCharsets] =
    useState<CharsetContextState>(initialCharsets);
  const [length, setLength] = useState<LengthContextState>(initialLength);
  const [password, setPassword] = useState<String>("");

  const { lowercase, uppercase, numbers, specialChars } = charsets;

  const updateCharset = (charset: string) => {
    setCharsets({
      ...charsets,
      [charset]: {
        ...charsets[charset],
        isActive: !charsets[charset].isActive,
      },
    });
  };

  const updateLength = (newLength: number) => {
    setLength({ ...length, length: newLength });
  };

  const generatePassword = () => {
    let chars = [""];
    let newPassword = "";
    let pattern: string | RegExp = "";

    if (lowercase.isActive) {
      chars = chars.concat(lowercase.values);
      pattern += "(?=.*[a-z])";
    }

    if (uppercase.isActive) {
      chars = chars.concat(uppercase.values);
      pattern += "(?=.*[A-Z])";
    }

    if (numbers.isActive) {
      chars = chars.concat(numbers.values);
      pattern += "(?=.*\\d)";
    }

    if (specialChars.isActive) {
      chars = chars.concat(specialChars.values);
      pattern += "(?=.*[!§,;.:-_#+*~§$%&?<>°^])";
    }

    for (let i = 0; i < length.length; i++) {
      const rNum = Math.floor(Math.random() * chars.length);
      newPassword += chars[rNum];
    }

    pattern = new RegExp(`^${pattern}.+$`);

    if (pattern.test(newPassword)) {
      console.log(true, pattern);
      setPassword(newPassword);
    } else {
      console.log("new", newPassword, pattern);
      generatePassword();
    }
  };

  return (
    <PwGenContext.Provider
      value={{
        charsets: charsets,
        length: length,
        password: password,
        updateCharset: updateCharset,
        updateLength: updateLength,
        generatePassword: generatePassword,
      }}
    >
      {children}
    </PwGenContext.Provider>
  );
};
