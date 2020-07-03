// String -> String
export const bookCase = (string) => {
  return string.replace(/^[a-z]|_[a-z]/g, (a) =>
    a.toUpperCase().replace("_", " ")
  );
};

export const kvStrings = (obj) => {
  return Object.keys(obj).map((key) => {
    if (obj[key] === true) {
      return `(${key})`;
    }
    return `${key}: ${obj[key]}`;
  });
};

// Number => Number
export const calculateMod = (score) => {
  return Math.floor((score - 10) / 2);
};

// Num -> String
export const symbol = (num) => {
  return num > 0 ? "+" : "";
};

// Object => Array
export const getSaves = (obj) => {
  return [
    "strength_save",
    "dexterity_save",
    "constitution_save",
    "intelligence_save",
    "wisdom_save",
    "charisma_save",
  ].reduce((acc, key) => {
    if (obj[key] !== null) {
      const mod = obj[key];
      acc.push(`${key.substring(0, 3)} ${symbol(mod)}${mod}`);
    }

    return acc;
  }, []);
};
