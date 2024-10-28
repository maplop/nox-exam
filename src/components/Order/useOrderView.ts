import { useEffect, useState } from "react";

export const useOrderView = () => {
  const [selectedButton, setSelectedButton] = useState<number>(0);
  const [openModal, setOpenModal] = useState<boolean>(false);

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openModal]);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleButtonClick = (index: number) => {
    setSelectedButton(index);
  };

  return {
    selectedButton,
    handleButtonClick,
    openModal,
    handleOpenModal,
    handleCloseModal,
  };
};
