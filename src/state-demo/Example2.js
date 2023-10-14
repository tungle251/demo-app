import React, { useState } from "react"
import MainLayout from "../components/MainLayout"

const Example2 = () => {
  const [count, setCount] = useState(0)

  return (
    <MainLayout>
      Count: {count}
      <br />
      {/* {Click me 1 time} */}
      <button
        onClick={() => {
          setCount(count + 1)
          console.log({ count })
        }}>
        Click me
      </button>
    </MainLayout>
  )
}

export default Example2
