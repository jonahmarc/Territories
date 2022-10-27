import React from 'react';

import './login.styles.css';
import phMap from '../assets/phmap.png';
import { Stack, Form, Button} from 'react-bootstrap';

class Login extends React.Component {

    render() {
        return (
            <div className="login_page">
                <div className="form_container">
                    <div className="phMap">
                        <img className='image' src={phMap} alt='ph map' />
                    </div>
                    <Stack className='m-0 p-0 justify-content-center'>
                        <h1>WELCOME BACK</h1>
                        <Form className='login_form'> 
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Username" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                LOGIN
                            </Button>
                        </Form>
                    </Stack>
                </div>
            </div>
        );
    }
}

export default Login;