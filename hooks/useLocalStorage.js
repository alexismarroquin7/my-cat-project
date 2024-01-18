import { useState } from "react"


export const useLocalStorage = (key, initialValue) => {
  const [storedState, setStoredState] = useState(() => {
    if (!localStorage.getItem(key)) {
      localStorage.setItem(key, JSON.stringify(initialValue))
    } 
    return JSON.parse(localStorage.getItem(key))

  })

  const setState = (value) => {
    localStorage.setItem(key, JSON.stringify(value))
    setStoredState(value)
  }

  return [storedState, setState];
}