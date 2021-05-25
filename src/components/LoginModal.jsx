import React from 'react';
import {Modal,Button,Form} from 'react-bootstrap';
import mongoose from 'mongoose';


export default function LoginModal(props) {

// ********************************************MONGOOSE CONNECTION****************************************************************
    // mongoose.connect("mongodb://localhost:27017/workoutDB", {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    //     useFindAndModify: false,
    //     useCreateIndex: true
    // });

    // const Schema = mongoose.Schema;
    // const ObjectId = Schema.ObjectId;

    // const WorkoutUser = new Schema({
    //     email: ObjectId,
    //     password: String,
    //     body: String,
    //     date: Date
    // });


    return (
        <div>
            <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">Login Detail</Modal.Title>
                </Modal.Header>
                
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>

                        
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary" type="submit">Submit</Button>
                    <Button variant='danger' onClick={props.onHide}>Close</Button>
                </Modal.Footer>
    </Modal>

        </div>
    )
}
