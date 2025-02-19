"use client";

import { useState } from "react";

const useHover = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => setIsHovered(true);
  const handleMouseOut = () => setIsHovered(false);

  return { isHovered, handleMouseOver, handleMouseOut };
};

export default useHover;
