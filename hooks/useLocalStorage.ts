"use client";

import { useCallback, useEffect, useState } from "react";

function readStoredValue<T>(key: string, initialValue: T): T {
  try {
    const item = window.localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : initialValue;
  } catch {
    return initialValue;
  }
}

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(initialValue);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setStoredValue(readStoredValue(key, initialValue));
    setIsHydrated(true);
    // initialValue is a render-time default; only re-read when the key changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  const setValue = useCallback(
    (value: T | ((val: T) => T)) => {
      setStoredValue((prev) => {
        const valueToStore = value instanceof Function ? value(prev) : value;
        try {
          window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch {
          /* ignore quota errors */
        }
        return valueToStore;
      });
    },
    [key]
  );

  return [storedValue, setValue, isHydrated] as const;
}
