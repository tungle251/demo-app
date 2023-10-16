import React, { useEffect, useState } from "react"
import MainLayout from "../components/MainLayout"

const Example12 = () => {
  const [count, setCount] = useState(0)
  const [num, setNum] = useState(0)

  useEffect(() => {
    console.log("run effect")
  }, [count])

  return (
    <MainLayout>
      Count: {count}
      <br />
      <button onClick={() => setCount(count + 1)}> Click Count</button>
      <button onClick={() => setNum(num + 1)}> Click Num</button>
    </MainLayout>
  )
}

export default Example12
