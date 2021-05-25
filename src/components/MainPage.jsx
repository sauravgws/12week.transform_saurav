import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function MainPage(){
    return(
        <Container>
            <Row>
                <Col>
                    <iframe width="100%" height="400" src="https://www.youtube.com/embed/uWyaPkt-VOI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>For the next 12 weeks, you'll get a chance to train, travel, and grow with Gethin. You'll see how he lives, how he lifts, what he eats, and what supplements he takes across 84 daily videos right here on Bodybuilding.com. You'll get to work out with Gethin, but if you want to grow like him, you need to kill your excuses and get ready for war.</p>
                    <p>Few men know muscle better than Kris Gethin. He knows how to train, torture, break, and build it. He knows the precise combination of balls-to-the-wall training, high-quality fuel, and smart supplementation to build maximum muscle.</p>
                    <p>Gethin recently embarked on a mission to gain 15 pounds of lean mass in 12 weeks. He gained more than 20. We followed him through the streets and gyms of Mumbai, India to capture the entire process-his workouts, meals, cardio sessions, and more. The result? Kris Gethin's 12-Week Muscle-Building Trainer.</p>
                </Col>
            </Row>
            <Row>
                <Col></Col>
                <Col>
                    <img src="/images/index1.jpg" alt="kris1"/>
                </Col>
                <Col>
                    <img src="/images/index2.jpg" alt="kris2"/>
                </Col>
                <Col></Col>
                
            </Row>
        </Container>
    );
}