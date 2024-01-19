"use client"
import { useEffect, useState } from "react"
import { useToggle } from "../../hooks"

export const ApiKeyForm = ({apiKey, setApiKey}) => {
  

  const {
    active: editing,
    toggleActive: toggleEditing
  } = useToggle(false);

  const [values, setValues] = useState({apiKey});

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setApiKey(values.apiKey.trim())
    toggleEditing()
  }

  return (
    <>
    {isClient && editing && (
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
    )}

    {isClient && !editing && (
      <div>
        <p>Api Key: {apiKey !== "" ? apiKey : "Not Set"}</p>
        <button
          onClick={toggleEditing}
        >Edit</button>
      </div>
    )}     
    </>
  )
}
