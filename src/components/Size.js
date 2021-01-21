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


const Size = ({addSize, pizza}) => {
    const sizes = ['Small' , 'Medium' , 'Large'];
    return(
        <motion.div className='size container'
        variants={containerVariant} initial="hidden" animate="visible" exit="exit"
        >
            <h1>Size</h1>
            <div className="card-container"
            >
                {sizes.map((size) => {
                    let sizeClass = pizza.size === size ? 'active' : '';
                    return(
                        <motion.div key={size} className={"card " +  sizeClass} onClick={()=> addSize(size)}
                        whileHover={{scale: 1.2}}
                        transition={{duration: 0.5}}
                        > 
                            <div className={size}></div> 
                            <p>{size}</p> 
                        </motion.div>
                    )

                })}
            </div>

            <Link to="/base">
            <motion.button variants={buttonVariant} whileHover="hover">
                Next
            </motion.button>
            </Link>
        </motion.div>
    )

}
export default Size;

{/* <div className="card" onClick={()=> addSize('small')}> <div className="small"></div> <p>Small</p> </div>
<div className="card" onClick={()=> addSize('medium')}><div className="medium"></div> <p>Medium</p> </div>
<div className="card" onClick={()=> addSize('large')}><div className="large"></div> <p>Large</p> </div> */}