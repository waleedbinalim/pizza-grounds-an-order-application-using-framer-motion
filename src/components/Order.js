import React from 'react';

const Order = ({pizza}) => {
    return(
        <div className='base container'>
            <h1>Congrats!</h1>
            <p>You've ordered a {pizza.size} {pizza.base} pizza with</p>
            
            {pizza.toppings.map((topping) => {
                return(

                        <span key={topping} className="final-toppings">{topping}</span>
                )
            })}

        </div>
    )

}
export default Order;