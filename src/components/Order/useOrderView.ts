import { useState } from "react";

export const useOrderView = () => {
  const [selectedButton, setSelectedButton] = useState<number | null>(0);

  const handleButtonClick = (index: number) => {
    setSelectedButton(index);
  };

  return {
    selectedButton,
    handleButtonClick,
  };
};
