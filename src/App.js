import { useEffect, useState } from "react"
import MainLayout from "./components/MainLayout"

function App() {
  const [products, setProducts] = useState([])
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    const abortController = new AbortController()
    const fetchData = async () => {
      fetch(`https://dummyjson.com/products/search?q=${searchText}`, {
        signal: abortController.signal,
      })
        .then((res) => res.json())
        .then((data) => {
          setProducts(data.products)
        })
        .catch((error) => {
          if (error.name !== "AbortError") {
            console.error(error)
          }
        })
    }

    fetchData()

    return () => {
      abortController.abort()
    }
  }, [searchText])

  return (
    <MainLayout>
      <div>Search product</div>
      <br />
      <input
        placeholder="Search by name"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}></input>
      <ul>
        {products.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </MainLayout>
  )
}

export default App
