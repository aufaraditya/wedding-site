import { Parallax } from 'react-parallax'
import InvitationImage from '../images/Couple.png'
import GroomImage from '../images/groom.jfif'
import BrideImage from '../images/bride.png'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'



function  Invitation() {
return (
    <Parallax className='image' bgImage={InvitationImage} strength={600}>
  
       <Container id="invitation-container">
         <Row className="justify-content-md-center mb-3">
               <h1 id="bismillah">Bismillahirrahmanirrahim</h1>
               <h2>Assalamualaikum Warahmatullahi Wabarakatuh</h2>
            </Row>
            <Row className="justify-content-md-center" id="invitation-text-all">
               {/* <p className="invitation-text">We invite you to celebrate our wedding</p> */}
               <p className="invitation-text">Dengan memohon  Rahmat dan Ridho Allah Subhanahu wa ta'ala</p>
               <p className="invitation-text1">kami mengundang Bapak/Ibu/Saudara/i</p>
               <p className="invitation-text2">pada acara pernikahan putra-putri kami</p> 
               
            </Row>
            <Row className="justify-content-md-center mt-5">
               <h2>Minggu, 21 November 2023</h2>
            </Row>
       
         <Row  id="wedding-image" className="mb-5">
            <Col md={2}></Col>
            <Col md={4} sm={6}><img src={BrideImage} id="bride-image"/>
               <Col id="bride-name"><h2>Marge Simpson</h2></Col>
               <Col  id="bride-label0"><p>Putri Bungsu</p></Col>
               <Col  id="bride-label1"><p>dari Bapak Clancy Bouvier dan </p></Col>
               <Col  id="bride-label1"> <p>Ibu Jacqueline Bouvier</p></Col>
            </Col>
            <Col md={4} sm={6}><img src={GroomImage} id="groom-image"/>
               <Col id="groom-name"><h2>Homer Simpson</h2></Col>
               {/* <Col id="groom-name2"><h2>A. Basysyasy</h2></Col> */}
               <Col id="groom-label0"><p>Putra Keempat</p></Col>
               <Col id="groom-label1"><p>dari Bapak Grampa Simpson dan</p></Col>
               <Col id="groom-label1">  <p>Ibu Mona Simpson</p></Col>
            </Col>
            <Col md={2}></Col>
         </Row>
       </Container>
    </Parallax>
)
         }

export default Invitation