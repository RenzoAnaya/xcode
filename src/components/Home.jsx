import React from 'react'
import {Container, Row, Col, Card, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>

<Container>
  <Row>
    <Col>
    <div class="">
            <div id="landingPrincipal" class="container my-auto">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-8 col-lg-6 text-center">
                        <h1 id="tituloLanding" class="display-1 mb-4">ALCHEMIA CAFFE</h1>

                        <p id="beTheGold" class="text-center text-white-75 mb-7 titulosMedianos">BE THE GOLD</p>
                    </div>
                </div>
            </div>
        </div>
        </Col>
  </Row>
</Container>
<Container>
<Row xs={1} md={2} className="g-4">
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_image__small/public/temas/cafe.jpg" />
  <Card.Body>
    <Card.Title>Cafés de especialidad</Card.Title>
    <Link to="/categoria/cafes"><Button variant="primary">Ver Cafés</Button></Link>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Cev2TRFDma8iRIniWt_qcgbH5DCZGMmmdCUmC3TLL9-mGuNGfidsSPIMVE92mMrPygE&usqp=CAU" />
  <Card.Body>
    <Card.Title>Métodos para preparar café</Card.Title>
    <Link to="/categoria/cafeteras"><Button variant="primary">Ver Métodos</Button></Link>
  </Card.Body>
</Card>
</Row>
</Container>



        </>

    )
}

export default Home
