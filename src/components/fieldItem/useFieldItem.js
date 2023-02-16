import { useEffect, useRef, useState } from "react";

const useFieldItem = ({ data, row, column }) => {
  const heightBlock = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [height, setHeight] = useState(null);
  useEffect(() => {
    setHeight(heightBlock.current.getBoundingClientRect().width);
    setIsHovered(false);
  }, [data]);
  const toggleField = (array) => {
    const isNewItem = array?.findIndex(
      (item) => item?.row === row && item?.column === column
    );
    if (isNewItem !== -1) {
      const a = [...array];
      a.splice(isNewItem, 1);
      return a;
    } else {
      return [...array, { row, column }];
    }
  };
  return {
    isHovered,
    heightBlock,
    height,
    toggleField,
    setIsHovered,
  };
};

export default useFieldItem;
