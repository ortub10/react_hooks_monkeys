import { useState } from "react";

export default function useCounter(_num) {
  const [conter, setCounter] = useState(_num);
  const addOne = () => {
    setCounter((prev) => prev + 1);
  };
  const resetCounter = () => {
    setCounter(_num);
  };

  return [conter, addOne, resetCounter];
}
