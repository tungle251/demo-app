import React, { useState } from "react"
import MainLayout from "../components/MainLayout"

const Example4 = () => {
  const [user, setUser] = useState({ name: "John" })

  console.log("---render---")
  return (
    <MainLayout>
      Username: {user.name}
      <br />
      {/* {Click me 3 times} */}
      <button
        onClick={() => {
          setUser({ name: "John" })
        }}>
        Click me
      </button>
    </MainLayout>
  )
}

export default Example4
