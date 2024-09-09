// hooks/useLocalStorage.js
"use client";

import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  const getStoredValue = () => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  };

  const [value, setValue] = useState(getStoredValue);

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
