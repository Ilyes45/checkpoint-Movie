import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

const AddMovie = ({add}) => {
    const [show,setShow]=useState(false);

    const handleClose=() => setShow(false);
    const handleShow=() => setShow(true);

    //initialitation
    const [title,settitle]=useState("");
    const [description,setdescription]=useState("");
    const [rate,setrate]=useState("");
    const [posterUrl,setposterUrl]=useState("");

    //update state
    const handleTitle = (e) => {
        settitle(e.target.value);
    };
    const handleDescription = (e) => {
        setdescription(e.target.value);
    };
    const handleRate = (e) => {
        setrate(e.target.value);
    };
    const handlePosteUrl = (e) => {
        setposterUrl(e.target.value);
    };

    //function add movie
    const handleMovie= (e) =>{
        let newMovie ={title,description,rate,posterUrl};
        add(newMovie);
        handleClose();
    };
  return (
    <div>
       <Button variant="primary" onClick={handleShow}>
        Add Movie 
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Label>Movie Title</Form.Label>
                <Form.Control
                    type="text"
                    placeholder='Entrer movie title'
                    value={title}
                    onChange={(e)=>handleTitle(e)}
                    />
                    <Form.Label>Movie Description</Form.Label>
                <Form.Control
                    type="text"
                    placeholder='Entrer movie  Description'
                    value={description}
                    onChange={(e)=>handleDescription(e)}
                    />
                    <Form.Label>Movie Rate</Form.Label>
                <Form.Control
                    type="text"
                    placeholder='Entrer movie Rate'
                    value={rate}
                    onChange={(e)=>handleRate(e)}
                    />
                    <Form.Label>Movie PosteUrl</Form.Label>
                <Form.Control
                    type="text"
                    placeholder='Entrer movie PostUrl'
                    value={posterUrl}
                    onChange={(e)=>handlePosteUrl(e)}
                    />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleMovie()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddMovie
