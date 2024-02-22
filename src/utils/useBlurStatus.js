import { useEffect, useState } from 'react';

const useBlurStatus = () => {
  const [blurStatus, setBlurStatus] = useState("Food Mania");

  useEffect(() => {
    const handleBlur = () => {
      setBlurStatus("Come back bro!");
      document.title = "Come back bro! - Food Mania"; // Update the title when the window is blurred
    };

    const handleFocus = () => {
      setBlurStatus("Food Mania");
      document.title = "Food Mania"; // Update the title when the window is focused
    };

    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
    };
  }, []);

  return blurStatus;
};

export default useBlurStatus;
