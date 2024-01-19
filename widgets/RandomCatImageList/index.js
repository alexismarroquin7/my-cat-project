"use client";
import { useCatService } from "../../hooks"
import { useState, useEffect } from "react";

import Image from "next/image";

import styles from "./index.module.css";
import Link from "next/link";

export const RandomCatImageList = ({apiKey}) => {
  const { state, getRandomImageList } = useCatService();
  
  const [values, setValues] = useState({
    limit: 1
  })
  
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    getRandomImageList({limit: values.limit});
    setIsClient(true)
  }, [])
  
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }
  
  return (
    <div
      className={styles.root}
    >
      <h3>Random Cat Images</h3>

      <label
        htmlFor="limit"
        className={styles.root__label}
      >Number of images: {values.limit}
        <input 
          type="range"
          min="1"
          max="10"
          id="limit"
          name="limit"
          value={values.limit}
          onChange={handleChange}
        />
      </label>


      <button
        onClick={() => getRandomImageList({limit: values.limit})}
      >Refresh</button>

      <div
        className={styles.root__imagelist}
      >
        {isClient && apiKey !== "" && state.imageList.map(image => {
          return (
          <div
            key={image.id}
            className={styles.root__imagecontainer}
          >
            <Image
              className={styles.root__image}
              width={300}
              height={300}
              src={image.url}
              alt="cat image"
            />
            <Link
              href={image.url}
              target="_blank"
            >{image.url}</Link>
          </div>
          )
        })}
      </div>


      {isClient && apiKey === "" && <p style={{color:"red"}}>Error api key required</p>}
    </div>
  )
}