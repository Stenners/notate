import { useRef,  useCallback } from 'react';
import debounce from 'lodash/debounce'

const useDebouncedCallback = (callback, delay) => {
  const callbackRef = useRef();
  callbackRef.current = callback;
  return useCallback(
    debounce((...args) => callbackRef.current(...args), delay),
    []
  );
};

export default useDebouncedCallback;
