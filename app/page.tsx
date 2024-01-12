import Button from "@/components/button"
import { Box, Text } from "@chakra-ui/react"

export default function Home() {
  return (
    <main>
      <Box justifyItems={'center'}>
          <Text className='md:text-4xl mt-60 text-center'>Welcome to Droners Inc. Incoincing App</Text>

          <Box className="mt-4 ">
            <Button fileUrl="/login" text={"Click to Login"} />
          </Box>
      </Box>
    </main>
  )
}
