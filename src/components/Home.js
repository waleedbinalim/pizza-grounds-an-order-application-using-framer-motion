import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const containerVariant = {
    hidden: {
        opacity: 0,
        x: '100vw'
    },
    visible: {
        opacity:1,
        x: 0,
        transition: {
            delay:0.5,
            duration: 1,
            type: 'tween'
        }
    },
    exit: {
        x: '-100vw',
        transition: {ease: 'easeInOut'}
    }
}

const buttonVariant = {
    hover: {
        scale: [1,1.2], 

        transition: {
            duration:0.8,
            yoyo: Infinity
        },
    },
}

const Home = () => {
    return(
        <motion.div className='home container'
            variants={containerVariant} initial="hidden" animate="visible" exit="exit"
        >
            <h1>Welcome To Pizza Grounds</h1>
            <p>Place Your Order Below:</p>
            <Link to="/size">
                <motion.button variants={buttonVariant} whileHover="hover">
                    Order Now
                </motion.button>
            </Link>
        </motion.div>
    )

}
export default Home;