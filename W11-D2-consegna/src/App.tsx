import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AllArticles from "./components/AllArticles"
import { Col, Container, Row } from "react-bootstrap"
import Details from "./components/Details"

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Row className="justify-content-center g-3">
          <Routes>
            <Route path="/" element={<AllArticles />}></Route>
            <Route path="/details/:articleID" element={<Details />} />
          </Routes>
        </Row>
      </Container>
    </BrowserRouter>
  )
}

export default App
