import { createContext } from "react";

interface xyz {
  charsets: string[];
  charsetStates: { [index: string]: boolean };
  handleCharsetChange: () => void;
  length: { lengthMin: number; lengthMax: number };
}

export const PwGenContext = createContext<xyz>({
  charsets: ["lowercase", "uppercase", "numbers", "specialChars"],
  charsetStates: {
    lowercase: true,
    uppercase: false,
    numbers: false,
    specialCharts: false,
  },
  handleCharsetChange: (): void => {},
  length: {
    lengthMin: 8,
    lengthMax: 35,
  },
});
