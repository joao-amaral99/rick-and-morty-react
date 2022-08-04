import { useRef } from "react";

export const useDebounce = (fn, delay) => {
  const timeoutRef = useRef(null);

  function debouncedFn(...args) {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      fn(...args);
    }, delay);
  }

  return debouncedFn;
};
