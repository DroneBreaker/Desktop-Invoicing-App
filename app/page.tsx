import Button from "@/components/button"
import { Box, ChakraProvider, Text } from "@chakra-ui/react"

export default function Home() {
  return (
    <ChakraProvider>
      <div>
        <Box justifyItems={'center'}>
            <Text className='md:text-4xl mt-72 text-center text-white'>Welcome to Droners Inc. Incoincing App</Text>

            <Box mx={430} className="mt-4">
              <Button location="/login" text={"Click to Login"} />
            </Box>
        </Box>
      </div>
    </ChakraProvider>
  )
}
