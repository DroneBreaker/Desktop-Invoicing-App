import { Button } from '@chakra-ui/react'
import React from 'react'

interface ButtonProps {
  text: string
  location: string
  // download?: boolean
}

export default function button({ text, location }: ButtonProps) {
    
  return (
   <Button colorScheme='orange' size='lg' className='text-white text-sm mx-4 bg-red-500 rounded-2xl md:px-5 px-3 md:p-4 p-2'><a href={ location }>{ text }</a></Button>
  )
}
