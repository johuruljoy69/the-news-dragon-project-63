import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className='container mx-auto mt-4'>
            <h2>Terms and Conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis beatae porro nam, eveniet quos praesentium officiis earum voluptate nobis fuga quo architecto ipsam voluptas minus perspiciatis quibusdam distinctio nulla eum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis beatae porro nam, eveniet quos praesentium officiis earum voluptate nobis fuga quo architecto ipsam voluptas minus perspiciatis quibusdam distinctio nulla eum.</p>
            <p>Go back to <Link to='/register' >Register</Link> </p>
        </div>
    );
};

export default Terms;