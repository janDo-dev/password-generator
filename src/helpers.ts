export const capitalizeWord = (word: string) => {
  let splittedWord = word.split("");
  splittedWord[0] = splittedWord[0].toUpperCase();

  return splittedWord.join("");
};
