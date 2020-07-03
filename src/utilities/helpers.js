// String -> String
export const bookCase = (string) => {
  return string.replace(/^[a-z]|_[a-z]/g, (a) =>
    a.toUpperCase().replace("_", " ")
  );
};

export const toStrings = (obj) => {
  return Object.keys(obj).map((key) => `${key}: ${obj[key]}`);
};

// Number => Number
export const calculateMod = (score) => {
  return Math.floor((score - 10) / 2);
};
