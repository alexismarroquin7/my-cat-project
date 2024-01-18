"use client";


import { useCatService } from "../../hooks"
import { useEffect } from "react";
import Image from "next/image";

export const RandomCatImage = () => {
  const { state, getRandomImageList } = useCatService();

  useEffect(() => {
    getRandomImageList({limit: 1});
  }, [])
  
  return (
    <div>
      {
        state.imageList.map(image => {
          return (
          <Image
            key={image.id}
            width={image.width}
            height={image.height}
            src={image.url}
            alt="cat image"
          />
          )
        })

      }
    </div>
  )
}