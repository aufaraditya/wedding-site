import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Toast from 'react-bootstrap/Toast'
import ToastContainer from 'react-bootstrap/ToastContainer'
import { useState } from "react";
import { db } from "../firebase-config";
import {
    collection,
    addDoc,
  } from "firebase/firestore";
import Spinner from 'react-bootstrap/Spinner'






function Location_ver2() {

    const [newName, setNewName] = useState("")
    const [newEmail, setNewEmail] = useState("")
    const [newJumlah, setNewJumlah] = useState("")
    const [newHP, setNewHP] = useState("");
    const RSVPCollectionRef = collection(db, "RSVP")
    const [show, setShow] = useState(false);
    const loader = document.querySelector('#loading')

    const createData = async (e) => {
        e.preventDefault()
        if ( (newName == "") && ( newJumlah == ""  ) && (newHP == "" ) ) {
            alert('Data RSVP Tidak boleh kosong')
             }
        else if (newName == ""){
            alert('Masukkan Nama Terlebih Dahulu')
        }   else if( newJumlah == ""  ) {
            alert('Masukkan Jumlah yang hadir')
        }else {
         
            loader.style.visibility = "visible"
            await addDoc(RSVPCollectionRef, { NAME: newName, EMAIL: newEmail, NOHP: Number(newHP), JUMLAH: Number(newJumlah)  })
            loader.style.visibility = "hidden"
            setShow(true)
        }

        setNewName("")
        setNewEmail("")
        setNewJumlah("")
        setNewHP("")
    };

return(
 
        <div id="outer-location-page">
            <Container id="Map">
                <div class="overlay" id="loading">
                    <div class="overlay__wrapper">
                        <div class="overlay__spinner">
                            <Spinner animation="border" variant="warning" />
                        </div>
                    </div>
                </div>
                <ToastContainer className="p-3" position= "middle-end">
                    <Toast onClose={() => setShow(false)} show={show} delay={3000} bg="success" autohide>
                        <Toast.Body className='text-white' >Data Berhasil Masuk</Toast.Body>
                    </Toast>
                </ToastContainer>
                <Row className="mt-5">
                    <h1 id="RSVPTitle">RSVP</h1>
                    <p id="RSVPSubTitle">Khusus untuk Tamu Undangan</p>
                </Row>         
                <Form noValidate>
                    <Row className="mb-2">
                        <Col lg={2} ></Col>
                        <Form.Group as={Col} lg={4} controlId="validationFormikUsername2"
              className="position-relative" id="inputNama">
                            <Form.Control placeholder="Nama" value={newName} onChange={(event) => {
            setNewName(event.target.value)
            }}   name="name"/>
             <Form.Control.Feedback type="invalid" tooltip>
                  
                </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridEmail" lg={4}>
                            <Form.Control type="email" placeholder="Email" value={newEmail}  onChange={(event) => {
            setNewEmail(event.target.value)
            }} />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Col lg={2} ></Col>
                        <Form.Group as={Col} lg={4} id="inputHP">
                            <Form.Control type="number" placeholder="No.HP" class="form-control" id="validationDefault03" lg={4} value={newHP} onChange={(event) => {
            setNewHP(event.target.value)
            }} required/>
                        </Form.Group>

                        <Form.Group as={Col} lg={4}>
                            <Form.Control  type="number" class="form-control" id="validationDefault03" placeholder="Jumlah Tamu"  value={newJumlah} onChange={(event) => {
            setNewJumlah(event.target.value)
            }} required/>
                        </Form.Group>
                    </Row>
                    <Row className='mt-4'>
                        <Col lg={4} ></Col>
                        <Col md={4}>
                            <div className="d-grid gap-2">
                                <Button variant="rsvp" onClick={createData}>
                                    Send
                                </Button>
                            </div>
                        </Col>  
                    </Row>
                </Form>
                
            </Container>
        </div>
    )
}
    
    
    export default Location_ver2