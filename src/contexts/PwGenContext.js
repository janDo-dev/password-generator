import { createContext, useState } from "react";

export const PwGenContext = createContext();

const initialCharsets = {
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

const initialLength = {
  length: 8,
  lengthMin: 8,
  lengthMax: 35,
};

export const PwGenProvider = ({ children }) => {
  const [charsets, setCharsets] = useState(initialCharsets);
  const [length, setLength] = useState(initialLength);
  const [password, setPassword] = useState("");

  const { lowercase, uppercase, numbers, specialChars } = charsets;

  const updateCharset = (charset) => {
    setCharsets({
      ...charsets,
      [charset]: {
        ...charsets[charset],
        isActive: !charsets[charset].isActive,
      },
    });
  };

  const updateLength = (newLength) => {
    setLength({ ...length, length: newLength });
  };

  const getNewPassword = () => {
    let chars = [""];
    let newPassword = "";

    if (lowercase.isActive) {
      chars = chars.concat(lowercase.values);
    }

    if (uppercase.isActive) {
      chars = chars.concat(uppercase.values);
    }

    if (numbers.isActive) {
      chars = chars.concat(numbers.values);
    }

    if (specialChars.isActive) {
      chars = chars.concat(specialChars.values);
    }

    for (let i = 0; i < length.length; i++) {
      const rNum = Math.floor(Math.random() * chars.length);
      newPassword += chars[rNum];
    }

    setPassword(newPassword);
  };

  return (
    <PwGenContext.Provider
      value={{
        charsets,
        length,
        password,
        updateCharset,
        updateLength,
        getNewPassword,
      }}
    >
      {children}
    </PwGenContext.Provider>
  );
};
