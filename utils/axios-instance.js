import axios from "axios"

export const axiosInstance = () => {
  return axios.create({
    'x-api-key': process.env.apiKey,
    baseURL: "https://api.thecatapi.com/v1"
  })
}