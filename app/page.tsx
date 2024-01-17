import Button from "@/components/button"
import { Box, ChakraProvider, Text } from "@chakra-ui/react"

export default function Home() {
  return (
    <ChakraProvider>
      <div>
        <Box mx={'auto'}>
            <Text className='md:text-4xl mt-72 md:mx-[120px] lg:mx-[440px] text-white'>Welcome to Droners Inc. Incoincing App</Text>

            <Box className="mt-4 md:mx-[360px] lg:mx-[660px]">
              <Button location="/login" text={"Click to Login"} />
            </Box>
        </Box>
      </div>
    </ChakraProvider>
  )
}
