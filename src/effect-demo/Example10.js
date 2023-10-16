import React, { useEffect } from "react"
import MainLayout from "../components/MainLayout"

const Example9 = () => {
  console.log("1")
  useEffect(() => {
    console.log("2")
  })
  console.log("3")

  return <MainLayout>{console.log("4")}</MainLayout>
}

export default Example9
