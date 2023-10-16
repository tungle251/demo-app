import { useEffect, useState } from "react"

const useFetchData = (url, params) => {
  const [data, setData] = useState()
  useEffect(() => {
    const fetchData = async () => {
      fetch(buildUrl(url, params))
        .then((res) => res.json())
        .then((data) => {
          setData(data)
        })
    }

    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(params)])

  return {
    data,
  }
}

const buildUrl = (url, params) => {
  if (!params) {
    return null
  }
  const parmString = Object.keys(params)
    .map((k) => `${k}=${params[k]}`)
    .join("&")
  return `${url}?${parmString}`
}

export default useFetchData
