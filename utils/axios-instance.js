import axios from "axios"

export const axiosInstance = () => {
  return axios.create({
    headers: {
      'x-api-key': process.env.apiKey,
      'Access-Control-Allow-Origin': true
    },
    baseURL: "https://api.thecatapi.com/v1"
  })
}