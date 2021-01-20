import React from 'react';
import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';


const circleVariant = {
    hover: {
        scale: 1.6 , 
        rotateZ: 360,
        transition: {delay: 0.25 ,duration: 0.5}
    }
}


const Toppings = ({addTopping, pizza}) => {

    let toppingsToggle = {
        one: pizza.toppings.includes('Capsicum') ? 'check' : 'uncheck',
        two: pizza.toppings.includes('Pineapple') ? 'check' : 'uncheck',
        three: pizza.toppings.includes('Mushroom') ? 'check' : 'uncheck',
        six: pizza.toppings.includes('Extra Cheeze') ? 'check' : 'uncheck',
        five: pizza.toppings.includes('Tomatoes') ? 'check' : 'uncheck',
        four: pizza.toppings.includes('Olives') ? 'check' : 'uncheck'
    }

    return(
        <div className='base container'>
            <h1>Toppings</h1>
            <div className="toppings-container">
                <div className="upper-three">
                    <motion.div className="topping-circle circle-topleft" variants={circleVariant} whileHover="hover"
                    onClick={() => addTopping('Capsicum')}
                    > <div className={toppingsToggle.one}>&#10003;</div> </motion.div>
                    <motion.div className="topping-circle circle-top"  variants={circleVariant} whileHover="hover"
                    onClick={() => addTopping('Pineapple')}
                    ><div className={toppingsToggle.two}>&#10003;</div></motion.div>
                    <motion.div className="topping-circle circle-topright" variants={circleVariant} whileHover="hover"
                    onClick={() => addTopping('Mushroom')}
                    ><div className={toppingsToggle.three}>&#10003;</div></motion.div>
                </div>
                <div className="lower-three">
                    <motion.div className="topping-circle circle-left" variants={circleVariant} whileHover="hover"
                    onClick={() => addTopping('Olives')}
                    ><div className={toppingsToggle.four}>&#10003;</div></motion.div>
                    <motion.div className="topping-circle circle-bottom" variants={circleVariant} whileHover="hover"
                    onClick={() => addTopping('Tomatoes')}
                    ><div className={toppingsToggle.five}>&#10003;</div></motion.div>
                    <motion.div className="topping-circle circle-right" variants={circleVariant} whileHover="hover"
                    onClick={() => addTopping('Extra Cheeze')}
                    ><div className={toppingsToggle.six}>&#10003;</div></motion.div>
                </div>
            </div>
            <Link to="/order">
             <button>Next</button>
            </Link>
        </div>
    )

}
export default Toppings;