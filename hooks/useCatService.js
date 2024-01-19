import { useReducer } from "react";
import { axiosInstance } from "../utils";
import { useLocalStorage } from ".";

const initialState = {
  error: {
    message: ""
  },
  imageList: []
}

const ACTION = {
  GET_RANDOM_IMAGE_LIST: {
    START: "GET_RANDOM_IMAGE_LIST/START",
    SUCCESS: "GET_RANDOM_IMAGE_LIST/SUCCESS",
    FAIL: "GET_RANDOM_IMAGE_LIST/FAIL",
  }
}

const reducer = (state, action) => {
  switch(action.type) {
    case ACTION.GET_RANDOM_IMAGE_LIST.START:
      return {
        ...state,
        error: {
          ...state.error,
          message: ""
        },
        imageList: initialState.imageList
      }
    case ACTION.GET_RANDOM_IMAGE_LIST.SUCCESS:
      return {
        ...state,
        error: {
          ...state.error,
          message: ""
        },
        imageList: action.payload.imageList
      }
    case ACTION.GET_RANDOM_IMAGE_LIST.FAIL:
      return {
        ...state,
        error: {
          ...state.error,
          message: action.payload.error.message
        },
        imageList: initialState.imageList
      }
      
    default:
      throw Error(`unkown action.type: ${action.type}`)
  }
}

export const useCatService = () => {

  const [state, dispatch] = useReducer(reducer, initialState)
  const [apiKey, setApiKey] = useLocalStorage('api-key', "");
  
  async function getRandomImageList ({limit}) {
    dispatch({
      type: ACTION.GET_RANDOM_IMAGE_LIST.START
    })
    try {
      const res = await axiosInstance(apiKey).get(`/images/search?limit=${limit}`)
      dispatch({
        type: ACTION.GET_RANDOM_IMAGE_LIST.SUCCESS,
        payload: {
          imageList: res.data
        }
      })
    } catch (err) {
      dispatch({
        type: ACTION.GET_RANDOM_IMAGE_LIST.FAIL,
        payload: {
          error: {
            message: err?.response.data.message || "an error ocurred"
          }
        }
      })
      throw err.response.data.message
    }
  }
  
  return {
    getRandomImageList,
    state
  }
}