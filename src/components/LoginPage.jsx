import React from 'react';
import { Container,Button} from 'react-bootstrap';
import { FcGoogle } from 'react-icons/fc';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

export default function LoginPage(){
    const [loginShow, setLoginShow] = React.useState(false);
    const [registerShow, setRegisterShow] = React.useState(false);
    return(
        <Container fluid style={{width: "100%",height: "545px",padding:'0',position:'relative'}}>
            <img src='/images/indexBg.jpg' alt='background' style={{width: 'inherit', height: 'inherit'}}/>
            
             <Button variant="danger" size='lg' onClick={() => setLoginShow(true)} style={{position: 'absolute',top:'70%',left:'47%',width: '130.63px'}}>
                Login
            </Button>

            <LoginModal
                show={loginShow}
                onHide={() => setLoginShow(false)}
            />
            
            <Button variant="secondary" size='lg' onClick={() => setRegisterShow(true)} style={{position: 'absolute',top:'83%',left:'47%'}}>
               <FcGoogle/> Register
            </Button>

            <RegisterModal
                show={registerShow}
                onHide={() => setRegisterShow(false)}
            />
        </Container>
    );
}