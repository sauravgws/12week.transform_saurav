import React from 'react';
import {Modal,Button,Form,Col} from 'react-bootstrap';
import mongoose from 'mongoose';

export default function RegisterModal(props) {

// // ********************************************MONGOOSE CONNECTION****************************************************************
//     mongoose.connect("mongodb://localhost:27017/workoutDB", {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useFindAndModify: false,
//         useCreateIndex: true
//     });

//     const Schema = mongoose.Schema;
//     const ObjectId = Schema.ObjectId;

//     const WorkoutUser = new Schema({
//         email: ObjectId,
//         password: String,
//         fname: String,
//         lname: String,
//         address: String,
//         city: String,
//         state: String,
//         zip: Number,
// });

// // CREATING MODEL
//     const loginItem = mongoose.model("loginDetail",WorkoutUser);


// SCHEMA
    // const loginSchema = {
    //     email: { type: String, index: { unique: true, dropDups: true }},
    //     password: String,
    //     fname: String,
    //     lname: String,
    //     address: String,
    //     city: String,
    //     state: String,
    //     zip: Number,
    // }



    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    Registeration Detail
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Fisrt Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter First Name" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Last Name" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" />
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                                <Form.Control />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control />
                            </Form.Group>
                        </Form.Row>

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
