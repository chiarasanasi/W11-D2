import { useEffect, useState } from "react"
import { Spinner } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { Dettaglio } from "../types/Dettaglio"

const Details = function () {
  const urlApiArticle = "https://api.spaceflightnewsapi.net/v4/articles/"

  const param = useParams()
  console.log("PARAMS", param)

  const [detail, setDetail] = useState<Dettaglio | any>(null)
  //   const [detail, setDetail] = useState<Dettaglio | null>(null)

  const [isLoading, setIsLoading] = useState(true)

  const getDetails = function () {
    fetch(urlApiArticle + param.articleID)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("Errore nel recupero dati degli Articoli")
        }
      })
      .then((data) => {
        console.log("DATI DELL'ARTICLE" + param, data)
        setDetail(data)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getDetails()
  }, [])

  return (
    <>
      {isLoading ? (
        <Spinner animation="border" variant="success" />
      ) : (
        <div className="d-flex align-items-center flex-column">
          <h1 className="text-center mt-3">{detail?.title}</h1>
          <img
            src={detail?.image_url}
            width={"100%"}
            className="rounded-3 mt-3"
          ></img>
          <p className="mt-3 text-secondary">
            Published by :
            <span className="mx-2 text-secondary">{detail?.news_site}</span>
            {detail?.published_at ? (
              <span className="mx-2 text-secondary">
                Last Update : {detail?.updated_at.slice(0, 10)}
              </span>
            ) : null}
          </p>
          <p className="mt-1">{detail?.summary}</p>
        </div>
      )}
    </>
  )
}

export default Details
