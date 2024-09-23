import { useEffect, useState } from "react";

export function useLocalStorage(key, initValue) {
  const [value, setValue] = useState(() => {
    const localValue = localStorage.getItem(key)

    if (localValue == null) {
      if (typeof initValue === "function") {
        return initValue()
      } else {
        return initValue
      }
    }
    else {
      return JSON.parse(localValue)
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}
