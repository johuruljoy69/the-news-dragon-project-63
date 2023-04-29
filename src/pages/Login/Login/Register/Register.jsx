import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../providers/AuthProvider';


const Register = () => {
    const [error, setError] = useState('');
    const { createUser } = useContext(AuthContext);
    const[accepted, setAccepted] = useState(false);

    const handleSignUp = (event) => {
        setError('')
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(name, photo, email, password, confirm);

        if (password !== confirm) {
            setError('Password did not match')
            return
        }
        else if (password.length < 8) {
            setError('please add min 8 character')
            return
        }

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .then(error => {
                console.log(error);
                // setError(error.message)
            })

    }

    const handleAccepted = event =>{
        setAccepted(event.target.checked);
    }

    return (
        <Container className='w-25 mx-auto mt-5 border p-5'>
            <h2>Please Register</h2>
            <Form onSubmit={handleSignUp}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Photo URL" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label> Conform Password</Form.Label>
                    <Form.Control type="password" name='confirm' placeholder="Conform Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check 
                    onClick={handleAccepted}
                    type="checkbox" 
                    name='accept' 
                    label={<>Accept <Link to="/terms">Terms & Conditions</Link></>} />
                </Form.Group>
                <Button disabled={!accepted} variant="primary" type="submit">
                    Register
                </Button>
                <br />
                <Form.Text className="text-secondary">
                    Already Have an Account? <Link to='/login'>Login</Link>
                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-danger">
                    <p>{error}</p>
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;