import React from 'react';
import {motion} from 'framer-motion';

const orderVariant = {
    hidden: {
        opacity: 0
    }
    ,
    animate: {
        opacity: 1,
        transition: {delay: 0.25 ,duration: 1}
    }
}

const Order = ({pizza}) => {
    return(
        <motion.div className='base container' variants={orderVariant} initial="hidden" animate="animate">
            <h1>Congrats!</h1>
            <p>You've ordered a {pizza.size} {pizza.base} pizza with</p>
            
            {pizza.toppings.map((topping) => {
                return(

                        <span key={topping} className="final-toppings">{topping}</span>
                )
            })}

        </motion.div>
    )

}
export default Order;