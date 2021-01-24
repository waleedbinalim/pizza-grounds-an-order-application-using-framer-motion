import React from 'react';
import {motion} from 'framer-motion';

const headerVariant = {
    hidden: {
        y: '-100vh'
    },
    visible: {
        y: 0,
        transition: {
            duration: 1,
            type: 'spring',
            stiffness: 120
        }
    }
}

const Header = () => {
    return(
        <header>
            <motion.div className="page-logo" animate={{rotateZ: 360}} transition={{duration: 2,}} drag
            dragConstraints={{top:0 , left: 0 , bottom:0 , right: 0}} dragElastic={0.7}
            ></motion.div>
            <motion.div className="bottom-line"
            variants={headerVariant} initial="hidden" animate="visible"
            ></motion.div>
        </header>
    )

}
export default Header;