import React from 'react';
import { Container,Row,Col,} from 'react-bootstrap';
import MovingText from 'react-moving-text'
import M1 from './M1';
import Day from './Days';

function create(item){
    return(
        <M1 
        key={item.id}
        id={item.id}
        day={item.day}
        url={item.url}
        bodyPart={item.bodyPart}
        exercise={item.exercise} />
    )
}

export default function TrainingPage(props){
    

    return(
        <Container fluid className='training'>
                        <MovingText className='marq'
                            type="fadeIn"
                            duration="2000ms"
                            delay="0s"
                            direction="alternate"
                            timing="ease"
                            iteration="infinite"
                            fillMode="glowing">
                            Live as if you were to die tomorrow....
                        </MovingText>
            <Container>
                <Row>
                    <Col>
                        <iframe className='mt-0' width="100%" height="400px" src="https://www.youtube.com/embed/Wy5QECAbCyA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {Day.map(create)}
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}