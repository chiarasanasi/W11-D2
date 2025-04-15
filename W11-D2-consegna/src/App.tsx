import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AllArticles from "./components/AllArticles"
import { Container, Row } from "react-bootstrap"
import Details from "./components/Details"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Container>
        <Row className="justify-content-center g-3">
          <Routes>
            <Route path="/" element={<AllArticles />}></Route>
            <Route path="/details/:articleID" element={<Details />} />
          </Routes>
        </Row>
      </Container>
      <Footer />
    </BrowserRouter>
  )
}

export default App
