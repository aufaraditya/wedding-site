import { Parallax } from 'react-parallax'
import RundownImage from '../images/Additional.png'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'


function Rundown() {

    return (
        <Parallax className='image' bgImage={RundownImage} strength={600}>
                <Container id = "rundown">
                    <Row className="mb-5">
                        <h2>AKAD</h2>
                        <p>09:00 WIB</p>
                    </Row>
                    <Row className="mb-5">
                        <h2>RESEPSI</h2>
                        <p>11:00 WIB</p>
                    </Row>
                    <Row className="mb-3"> 
                        <Col md={12}>
                            <h3 id="MapTitle">Hotel Savero Style Bogor</h3>
                            <h3 id="MapAddress">Jl. Raya Pajajaran No.38, RT.01/RW.04, Babakan, </h3>
                            <h3 id="MapAddress">Kecamatan Bogor Tengah, Kota Bogor, Jawa Barat 16128</h3>
                            <div class="mapouter">
                                <div className="gmap_canvas">
                                    <iframe width="730" height="266" id="gmap_canvas" src="https://maps.google.com/maps?q=Hotel%20Savero%20Style%20Bogor&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                                    </iframe>
                                </div>
                            </div>
                        </Col>
                    </Row>
                     <Row className="justify-content-md-center mb-5 mt-5">
                        <Col md={4}>
                            <div className="d-grid gap-2">
                            <Button id="location" variant="location" href="https://g.page/hotel-savero-style-bogor?share" target="_blank">
                                Lihat di Google Map
                            </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>

        </Parallax>
    )


}


export default Rundown