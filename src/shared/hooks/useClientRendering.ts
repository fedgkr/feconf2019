import {useEffect, useState} from "react";

export default function useClientRendering() {
  const [isClientRendering, setClientRendering] = useState(false);
  useEffect(() => {
    setClientRendering(true);
  }, []);
  return {isClientRendering};
}
