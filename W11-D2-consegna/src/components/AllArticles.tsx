import { useEffect, useState } from "react"
import { Articolo } from "../types/Articolo"
import SingleArticles from "./SingleArticles"
import { Spinner } from "react-bootstrap"

const urlApiArticles = "https://api.spaceflightnewsapi.net/v4/articles"

const AllArticles = function () {
  const [articles, setArticles] = useState<Articolo[] | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const getAllArticles = () => {
    fetch(urlApiArticles)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("Errore nel recupero dati degli Articoli")
        }
      })
      .then((data) => {
        console.log("ARRAY DI ARTICLES", data.results)
        setArticles(data.results)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getAllArticles()
  }, [])

  return (
    <>
      {isLoading ? (
        <Spinner animation="border" variant="success" />
      ) : (
        articles?.map((a) => {
          return <SingleArticles data={a} key={a.id} />
        })
      )}
    </>
  )
}

export default AllArticles
