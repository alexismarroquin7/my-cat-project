"use client"
import { useState } from "react"
import { useLocalStorage } from "../../hooks"

export const ApiKeyForm = () => {
  const [apiKey, setApiKey] = useLocalStorage('api-key', "1234")

  const [values, setValues] = useState({apiKey});

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setApiKey(values.apiKey)
  }

  return (
    <form
      onSubmit={handleSubmit}
    >
      <label
        htmlFor="apiKey"
      >
        Enter api key
        <input
          id="apiKey"
          type="text"
          name={"apiKey"}
          value={values.apiKey}
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </form>
  )
}