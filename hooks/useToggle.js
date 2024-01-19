import { useState } from "react"

export const useToggle = (initialActive) => {
  const [active, setActive] = useState(initialActive || false)

  const toggleActive = () => setActive(!active);
  
  return {
    active,
    setActive,
    toggleActive
  }
}