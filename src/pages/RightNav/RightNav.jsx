import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../../QZone/QZone';
import bg from '../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h4 className='mt-2 mb-2'>Login With</h4>
            <Button className='mb-2' variant="outline-primary"><FaGoogle /> Login with Google</Button>
            <Button className='mb-3' variant="outline-secondary"><FaGithub /> Login with GitHub</Button>
            <div className='mb-3'>
                <h4>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook /> FaceBook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter /> twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram /> instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div className=' mt-3 text-center'>
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;