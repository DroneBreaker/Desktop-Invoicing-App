import { Avatar, Box, ChakraProvider, Text, Input, Stack, FormControl, FormLabel, HStack, Checkbox, Button } from '@chakra-ui/react'
import React from 'react'

interface ButtonProps {
    title: String,
    location: String
}

export default function page({title, location} : ButtonProps) {
  return (
    <ChakraProvider>
        <Box>
            <Box className='rounded-lg lg:h-[72px]' my={38} mx={'auto'} bg={'white'} h={570} w={460}>
                <Avatar size={'2xl'} className='mx-44'/>
                <Text className='text-black mt-4 text-center text-xl'>Login</Text>

                <FormControl mx={4} mt={6}>
                    <FormLabel>Business TIN</FormLabel>
                    <Input placeholder='Business TIN' htmlSize={4} width={430} mb={4} />
                </FormControl>

                <FormControl mx={4}>
                    <FormLabel>Username</FormLabel>
                    <Input placeholder='Username' htmlSize={4} width={430} mb={4} />
                </FormControl>

                <FormControl mx={4}>
                    <FormLabel>Password</FormLabel>
                    <Input placeholder='Password' htmlSize={4} width={430} mb={4} />
                </FormControl>

                <HStack justify={'space-between'} mb={2}>
                    <Box mx={4}>
                        <Checkbox className='text-sm'>Remember My Login</Checkbox>

                    </Box>

                    <Box>
                        <Text className='text-sm mr-4 text-blue-500'><a href='/'>Fogot Password?</a></Text>
                    </Box>
                </HStack>

                <Button mx={4} w={'94%'} mb={2}><a href='/'>Login</a></Button>

                <Text className='text-center text-blue-500'><a href='/signup'>Register new company?</a></Text>
            </Box>
        </Box>
    </ChakraProvider>
  )
}
