import { Parallax } from 'react-parallax'
import RundownImage from '../images/Additional.png'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import {useCollectionData} from 'react-firebase-hooks/firestore'
import Button from 'react-bootstrap/Button'
import { useState, useRef } from "react";
import { db} from "../firebase-config";
import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import {collection, addDoc, query, orderBy, limit } from "firebase/firestore";
import uuid from 'react-uuid'
import Spinner from 'react-bootstrap/Spinner'

function Testimony() {
        const dummy = useRef();
        const [newName, setNewName] = useState('')
        const [newAddress, setNewAddress] = useState('')
        const [newMessage, setNewMessage] = useState('')
        const testimonyRef = collection(db, 'TESTIMONY')
        const q = query(testimonyRef, orderBy("TIME", "desc"), limit(25))
        const [messages] = useCollectionData(q, { idField: 'Id' }) 
        const loader = document.querySelector('#loading')


      
  const sendMessage = async (e) => {
    e.preventDefault()
    if ((newName == '') && (newMessage == '') ) {
        alert('Isi data-data untuk mengirim Pesan')
    }else if (newName == ''){
        alert('Nama Tidak boleh kosong')
    } else if (newMessage == ''){
        alert('Isi pesan terlebih dahulu')
    }else {
    loader.style.visibility = "visible"
    await addDoc( testimonyRef, {
      NAMA: newName,
      ALAMAT: newAddress,
      PESAN: newMessage,
      TIME: firebase.firestore.Timestamp.fromDate(new Date()),
      ID: uuid()})
    loader.style.visibility = "hidden"
    setNewName('')
    setNewAddress('')
    setNewMessage('')
    dummy.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

return (
    <Parallax className='image' bgImage={RundownImage} strength={600}>
    <div className="testimonypage">
        <Container id="testimony">
            <div class="overlay" id="loading">
                <div class="overlay__wrapper">
                    <div class="overlay__spinner">
                        <Spinner animation="border" variant="warning" />
                    </div>
                </div>
            </div>
            <Row>
                <Col md={4}>
                    <Form id="Form" onSubmit={sendMessage}>
                        <Row>
                            <Col md={12}>
                                <h1 id="FormTitle">Kirim Ucapan</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <Form.Control className="mb-3" id="FormName" placeholder="Nama" value={newName} onChange={e => setNewName(e.target.value)}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <Form.Control className="mb-3" id="FormAddress" placeholder="Alamat"  value={newAddress} onChange={e => setNewAddress(e.target.value)}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Control placeholder="Pesan" as="textarea" rows={3} value={newMessage} onChange={e => setNewMessage(e.target.value)} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mb-5">
                            <Col md={12}>
                                <div className="d-grid gap-2">
                                    <Button variant="testimony" type="submit">
                                        Kirim
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </Form>
                </Col>
                <Col>
                </Col>
                <Col md={7}>
                    <div className="chatBox">
                        {messages && messages.map(msg => <ChatMessage key={msg.ID} message={msg} />)}
                        <span ref={dummy}></span>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    </Parallax>
    )
}


function ChatMessage(props) {
    const { PESAN, NAMA, TIME, ID } = props.message
    var ts = Math.round(new Date().getTime() / 1000);
    var history = TIME.seconds
    var seconds = ts - history
    var interval = seconds / 31536000;
    let chatdate = ''

    if (interval > 1) {
        if ( Math.round(interval) > 1 ){
            chatdate = Math.round(interval) + " years ago";
        }else{
            chatdate = Math.round(interval) + " year ago";
        }
        
      }
      interval = seconds / 2592000;
      if ((interval > 1) && (chatdate == '' )) {
        if ( Math.round(interval) > 1 ){
            chatdate = Math.round(interval) + " months ago";
        }else{
            chatdate = Math.round(interval) + " month ago";
        }
      }
      interval = seconds / 86400;
      if ((interval > 1) && (chatdate == '' )) {
        if ( Math.round(interval) > 1 ){
            chatdate = Math.round(interval) + " days ago";
        }else{
            chatdate = Math.round(interval) + " day ago";
        }
      }
      interval = seconds / 3600;
      if ((interval > 1) && (chatdate == '' )){
        if ( Math.round(interval) > 1 ){
            chatdate = Math.round(interval) + " hours ago";
        }else{
            chatdate = Math.round(interval) + " hour ago";
        }
      }
      interval = seconds / 60;
      if ((interval > 1) && (chatdate == '' )){
        if ( Math.round(interval) > 1 ){
            chatdate = Math.round(interval) + " minutes ago";
        }else{
            chatdate = Math.round(interval) + " minute ago";
        }
      }
      if (chatdate == '' ){
        if ( Math.round(interval) > 1 ){
            chatdate = Math.round(interval) + " seconds ago";
        }else{
            chatdate = Math.round(interval) + " second ago";
        }
      }

    const messageClass = ID
    return (<>
      <div id="chat-box-content" className={`message ${messageClass}`}>
        <h3 id="name-chat">{NAMA} | {chatdate}</h3>
        <p id="chat-chat">{PESAN}</p>
      </div>
    </>)
  }



export default Testimony