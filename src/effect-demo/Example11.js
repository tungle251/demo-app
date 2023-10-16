import React, { useEffect, useState } from "react"
import MainLayout from "../components/MainLayout"

const Example11 = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("run effect")
  }, [])

  return (
    <MainLayout>
      Count: {count}
      <br />
      {/* {Click me 3 times} */}
      <button onClick={() => setCount(count + 1)}> Click me</button>
    </MainLayout>
  )
}

export default Example11
