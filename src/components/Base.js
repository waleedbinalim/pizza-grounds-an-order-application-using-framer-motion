import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';

const cardVariant ={
    hover: {
        scale: 1.1,
        transition:{ duration: 0.2}
    }
}

const Base = ({ addBase , pizza}) => {
    
    let baseToggle = {
        one: pizza.base === 'Flatbread' ? 'active' : '',
        two: pizza.base === 'Thin & Crispy' ? 'active' : '',
        three: pizza.base === 'Stuffed Crust' ? 'active' : ''
    }

    return(
        <div className='base container'>
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
                <button>Next</button>
            </Link>
        </div>
    )

}
export default Base;