import React, { useState } from "react"
import MainLayout from "../components/MainLayout"

const Example5 = () => {
  const [user, setUser] = useState({ name: "John" })

  console.log("---render---")
  return (
    <MainLayout>
      Username: {user.name}
      <br />
      {/* {Click me 3 times} */}
      <button
        onClick={() => {
          user.name = "Doe"
          setUser(user)
        }}>
        Click me
      </button>
    </MainLayout>
  )
}

export default Example5
