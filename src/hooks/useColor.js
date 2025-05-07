import React from "react";

const useColor = () => {
  const random = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-teal-500",
  ];
  const randomColor = () => {
    const resultColor = Math.floor(Math.random() * random.length);

    return random[resultColor];
  };
  const value = randomColor();
  return { value, randomColor };
};

export default useColor;
