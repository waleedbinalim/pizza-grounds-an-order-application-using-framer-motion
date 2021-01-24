import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';

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

const cardVariant ={
    hover: {
        scale: 1.1,
        transition:{ duration: 0.2}
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


const Base = ({ addBase , pizza}) => {
    
    let baseToggle = {
        one: pizza.base === 'Flatbread' ? 'active' : '',
        two: pizza.base === 'Thin & Crispy' ? 'active' : '',
        three: pizza.base === 'Stuffed Crust' ? 'active' : ''
    }

    return(
        <motion.div className='base container'
        variants={containerVariant} initial="hidden" animate="visible" exit="exit"
        >
            <h1>Base</h1>
            <div className="card-container">
                <motion.div className={"card " + baseToggle.one} onClick={() => addBase('Flatbread')}
                    variants={cardVariant} whileHover="hover"
                >
                    <div className="flatbread"></div>
                    <p>Flatbread</p>
                </motion.div>

                <motion.div className={"card " + baseToggle.two} onClick={() => addBase('Thin & Crispy')}
                    variants={cardVariant} whileHover="hover"
                >
                    <div className="thin-and-crispy"></div>
                    <p>Thin & Crispy</p>
                </motion.div>
                
                <motion.div className={"card " + baseToggle.three} onClick={() => addBase('Stuffed Crust')}
                    variants={cardVariant} whileHover="hover"
                >
                    <div className="stuffed-crust"></div>
                    <p>Stuffed Crust</p>
                </motion.div>

            </div>

            <Link to="/toppings">
                <motion.button variants={buttonVariant} whileHover="hover">
                    Next
                </motion.button>
            </Link>
        </motion.div>
    )

}
export default Base;