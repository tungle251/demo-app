import React, { useState } from "react"
import MainLayout from "../components/MainLayout"

const Example1 = () => {
  const [count, setCount] = useState(0)

  console.log("render")

  return (
    <MainLayout>
      Count: {count}
      <br />
      {/* {Click me 3 times} */}
      <button onClick={() => setCount(count + 1)}> Click me</button>
    </MainLayout>
  )
}

export default Example1
