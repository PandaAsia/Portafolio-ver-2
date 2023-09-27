import { useState } from "react";

export const useModal = (initialvalue = false) => {
  const [isOpen, setIsOpen] = useState(initialvalue);

  const openModel = () => setIsOpen(true);
  const closeModel = () => setIsOpen(false);

  return [isOpen, openModel, closeModel];
};
