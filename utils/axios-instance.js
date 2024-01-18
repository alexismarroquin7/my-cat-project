import axios from "axios"

export const axiosInstance = (apiKey) => {
  return axios.create({
    headers: {
      'x-api-key': apiKey,
      'Access-Control-Allow-Origin': true
    },
    baseURL: "https://api.thecatapi.com/v1"
  })
}