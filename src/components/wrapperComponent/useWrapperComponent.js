import { useEffect, useState } from "react";

const useWrapperComponent = () => {
  const [hoveredSquare, setHoveredSquare] = useState([]);
  const [mode, setMode] = useState("");
  const [selectedMode, setSelectedMode] = useState("");
  const handleChange = (event) => {
    setMode(event.target.value);
  };

  useEffect(() => {
    setHoveredSquare([]);
  }, [selectedMode]);
  const selectMode = () => {
    setSelectedMode(mode);
  };
  return {
    hoveredSquare,
    handleChange,
    setHoveredSquare,
    mode,
    selectedMode,
    selectMode,
  };
};

export default useWrapperComponent;
