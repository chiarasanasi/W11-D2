import { Card, Button, Col } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { Articolo } from "../types/Articolo"
import { useNavigate } from "react-router-dom"

interface SingleArticlesProps {
  data: Articolo
}

const SingleArticles = function (props: SingleArticlesProps) {
  const navigate = useNavigate()
  return (
    <>
      <Col xs={12} sm={6} md={4} lg={3}>
        <Card className="fixed-card">
          <Card.Img
            className="fixed-card-img"
            variant="top"
            src={props.data.image_url}
          />
          <Card.Body>
            <Card.Title className="descrizione-title">
              {props.data.title}
            </Card.Title>
            <Card.Text className="descrizione-summary">
              {props.data.summary}
            </Card.Text>
            <Button
              variant="primary"
              onClick={() => {
                navigate("/details/" + props.data.id)
              }}
            >
              Read More
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}

export default SingleArticles
