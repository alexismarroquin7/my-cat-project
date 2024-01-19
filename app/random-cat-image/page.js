"use client"
import { useLocalStorage } from "@/hooks";
import { ApiKeyForm, RandomCatImageList } from "../../widgets";

export default function RandomCatImagePage () {
  const [apiKey, setApiKey] = useLocalStorage('api-key', "")

  

  return <div>
    <ApiKeyForm
      apiKey={apiKey}
      setApiKey={setApiKey}
    />
    <RandomCatImageList
      apiKey={apiKey}
    />
  </div>
}