import React from 'react'

interface ButtonProps {
  text: string
  fileUrl?: string
  // download?: boolean
}

export default function button({ text, fileUrl }: ButtonProps) {
    
  return (
   <button className='text-white text-sm mx-4 bg-red-500 rounded-2xl md:px-5 px-3 md:p-4 p-2'><a href={ fileUrl }>{ text }</a></button>
  )
}
