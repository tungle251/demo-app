import React, { useEffect, useState } from "react"
import MainLayout from "../components/MainLayout"

const Example13 = () => {
  const [count, setCount] = useState(0)

  console.log(count)
  useEffect(() => {
    const id = setInterval(() => {
      console.log("run interval")
      setCount((count) => count + 1)
    }, 500)
    return () => {
      clearInterval(id)
    }
  }, [])

  return (
    <MainLayout>
      Count: {count}
      <br />
    </MainLayout>
  )
}

export default Example13
