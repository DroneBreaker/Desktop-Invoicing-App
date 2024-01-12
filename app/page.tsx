import Button from "@/components/button"

export default function Home() {
  return (
    <main>
      <div>
          <h1 className='md:text-4xl mt-60 text-center'>Welcome to Droners Inc. Incoincing App</h1>

          <div className="mt-4 mx-[120px] md:mx-[380px] lg:mx-[660px]">
            <Button fileUrl="/login" text={"Click to Login"} />
          </div>
      </div>
    </main>
  )
}
