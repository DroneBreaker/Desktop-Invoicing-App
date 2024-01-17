import { Avatar, Box, ChakraProvider, Text, Input, Stack, FormControl, FormLabel, HStack, Checkbox, Button } from '@chakra-ui/react'
import React from 'react'

interface ButtonProps {
    title: String,
    location: String
}

export default function Register({title, location} : ButtonProps) {
  return (
    <ChakraProvider>
        <Box>
            <Box className='rounded-lg lg:h-[72px]' my={18} mx={'auto'} bg={'white'} h={630} w={460}>
                <Avatar size={'2xl'} className='mx-44'/>
                <Text className='text-black mt-4 text-center text-xl'>Registration</Text>

                <FormControl mx={4} mt={6}>
                    <FormLabel>Business TIN</FormLabel>
                    <Input htmlSize={4} width={430} mb={4} />
                </FormControl>

                <FormControl mx={4}>
                    <FormLabel>PIN</FormLabel>
                    <Input placeholder='Enter 6 digits pin code' htmlSize={4} width={430} mb={4} />
                </FormControl>

                <FormControl mx={4}>
                    <FormLabel>Business Name</FormLabel>
                    <Input disabled bg={'gray'} htmlSize={4} width={430} mb={4} />
                </FormControl>

                <FormControl mx={4}>
                    <FormLabel>Full Name</FormLabel>
                    <Input disabled bg={'gray'}  htmlSize={4} width={430} mb={4} />
                </FormControl>

                {/* <HStack justify={'space-between'} mb={2}>
                    <Box mx={4}>
                        <Checkbox className='text-sm'>Remember My Login</Checkbox>

                    </Box>

                    <Box>
                        <Text className='text-sm mr-4 text-blue-500'><a href='/'>Fogot Password?</a></Text>
                    </Box>
                </HStack> */}

                <Button justifyItems={'flex-end'} mx={4} mb={2}><a href='/'>Next</a></Button>

                <Text className='text-center text-blue-500'><a href='/login'>Already have an Acoount? Click to Login</a></Text>
            </Box>
        </Box>
    </ChakraProvider>
  )
}

