import React, { useState } from "react"
import MainLayout from "../components/MainLayout"

const Example6 = () => {
  const [count, setCount] = useState(0)

  console.log("---render---")

  return (
    <MainLayout>
      Count: {count}
      <br />
      {/* {Click me 1 time} */}
      <button
        onClick={() => {
          setCount(count + 1)
          setCount(count + 2)
          setCount(count + 3)
        }}>
        Click me
      </button>
    </MainLayout>
  )
}

export default Example6
