import { Parallax } from 'react-parallax'
import GalleryImage from '../images/Couple.png'
import ImageOne from '../images/1.jfif'
import ImageTwo from '../images/2.jfif'
import ImageThree from '../images/3.jfif'
import ImageFour from '../images/4.jfif'
import ImageFive from '../images/5.jfif'
import ImageSix from '../images/6.jfif'
import ImageSeven from '../images/7.png'
import ImageEight from '../images/8.jfif'
import ImageOne1 from '../images/11.jfif'
import ImageTwo2 from '../images/22.jfif'
import ImageThree3 from '../images/33.jfif'
import ImageFour4 from '../images/44.png'
import ImageFive5 from '../images/55.png'
import ImageSix6 from '../images/66.jfif'
import ImageSeven7 from '../images/77.jfif'
import ImageEight8 from '../images/88.jpg'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'



function Gallery() {
    return (
        <Parallax className='image'  bgImage={GalleryImage} strength={600}>
            <h1 id='gallery-title'>Our Childhood Gallery</h1>
            <Carousel className="mb-5" id="Carousel">
                <Carousel.Item interval={2000}>
                     <Container id="gallery-container">
                        <Row id="flex-gallery">
                            <Col lg={3} sm={6} xs={12}>
                                    <img src={ImageOne}/>
                            </Col>
                            <Col lg={3} sm={6} xs={12}>
                                    <img src={ImageTwo}/>
                            </Col>
                            <Col lg={3} sm={6} xs={12}>
                                    <img src={ImageThree}/>
                            </Col>
                            <Col lg={3} sm={6} xs={12}>
                                    <img src={ImageFour}/>
                            </Col>
                        </Row>
                        <Row id="flex-gallery">
                            <Col lg={3} sm={6} xs={12}>
                                    <img src={ImageFive}/>
                            </Col>
                            <Col lg={3} sm={6} xs={12}>
                                    <img src={ImageSix}/>
                            </Col>
                            <Col lg={3} sm={6} xs={12}>
                                    <img src={ImageSeven}/>
                            </Col>
                            <Col lg={3} sm={6} xs={12}>
                                    <img src={ImageEight}/>
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <Container id="gallery-container">
                        <Row id="flex-gallery">
                            <Col lg={3} sm={6} xs={12}>
                                <img src={ImageOne1}/>
                            </Col>
                            <Col lg={3} sm={6} xs={12}>
                                <img src={ImageTwo2}/>
                            </Col>
                            <Col lg={3} sm={6} xs={12}>
                                 <img src={ImageThree3}/>
                             </Col>
                            <Col lg={3} sm={6} xs={12}>
                                 <img src={ImageFour4}/>
                            </Col>
                        </Row>
                        <Row id="flex-gallery">
                            <Col lg={3} sm={6} xs={12}>
                                <img src={ImageFive5}/>
                            </Col>
                            <Col lg={3} sm={6} xs={12}>
                                 <img src={ImageSix6}/>
                            </Col>
                            <Col lg={3} sm={6} xs={12}>
                                <img src={ImageSeven7}/>
                             </Col>
                            <Col lg={3} sm={6} xs={12}>
                                <img src={ImageEight8}/>
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Item>
            </Carousel>
        </Parallax>
    )
}


export default Gallery