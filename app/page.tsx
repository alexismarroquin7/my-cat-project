"use client"
import { useEffect } from "react";
import { useCatService } from "../hooks";

import Image from 'next/image'

export default function Home() {

  const { state, getRandomImageList } = useCatService();

  useEffect(() => {
    getRandomImageList({limit: 1});
  }, [])

  return (
    <main>
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
    </main>
  )
}
