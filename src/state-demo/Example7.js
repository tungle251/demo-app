import React, { useState } from "react"
import MainLayout from "../components/MainLayout"

const Example7 = () => {
  const [count, setCount] = useState(0)

  console.log("---render---")

  return (
    <MainLayout>
      Count: {count}
      <br />
      {/* {Click me 1 time} */}
      <button
        onClick={() => {
          setCount((n) => n + 1)
          setCount((n) => n + 1)
          setCount((n) => n + 1)
        }}>
        Click me
      </button>
    </MainLayout>
  )
}

export default Example7
