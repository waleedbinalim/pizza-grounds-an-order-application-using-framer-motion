import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <div className='home container'>
            <h1>Welcome To Pizza Grounds</h1>
            <p>Place Your Order Below:</p>
            <Link to="/size">
                <button>Order Now</button>
            </Link>
        </div>
    )

}
export default Home;