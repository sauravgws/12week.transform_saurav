import React from 'react';
import {Button,Modal,FormCheck,Container,Col,Row,Alert} from 'react-bootstrap';


export default function M1(props){
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let key,exer=[];

    function ex(){
        for (key in props.exercise) {
            if (props.exercise.hasOwnProperty(key)) {
                console.log(key + " - " + props.exercise[key]);
                exer.push(key);
                exer.push(props.exercise[key]);
            }
        }

        return(
                <div style={{textAlign: 'center'}}>
                    {
                        exer.map((item,i)=>{
                            if(i%2===0){
                                return(
                                    <Alert style={{margin:'0',textAlign:'left'}} variant='info'><strong>{item}</strong></Alert>
                                )
                            }else{
                                return(
                                    <Alert style={{margin:'0',textAlign:'left'}} variant='danger'>{item}</Alert>
                                )
                            }
                        })
                    }
                </div>
        )
                                           
    }
    
    return(
        <div className="m1">
        <Button className="modal-btn" variant="info" onClick={handleShow}>
            <strong>Day-{props.id}</strong>
            <FormCheck/>
                
        </Button>

                        <Modal
                            show={show}
                            onHide={handleClose}
                            keyboard={false}
                            size="lg"
                        >
                            <Modal.Header closeButton>
                            <Modal.Title>{props.bodyPart} <small>(Day {props.id})</small></Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Container fluid>
                                    <Row>
                                        <Col sm={12} lg={12}>
                                            <iframe width="100%" height="450" src={props.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={12} lg={12}>
                                            <ul>
                                                {console.log(props.exercise)}
                                                {ex()}
                                            </ul>
                                        </Col>
                                    </Row>
                                </Container>
                            
                            </Modal.Body>

                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            </Modal.Footer>
                        </Modal>
        </div>
    );
}