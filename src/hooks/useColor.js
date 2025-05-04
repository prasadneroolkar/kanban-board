import React from "react";

const useColor = () => {
  const random = [
    " bg-blue-500",
    " bg-amber-500",
    " bg-red-500",
    " bg-green-600",
    " bg-purple-500",
  ];
  const randomColor = () => {
    const resultColor = Math.floor(Math.random() * random.length);

    return random[resultColor];
  };
  const value = randomColor();
  return { value, randomColor };
};

export default useColor;
