import React from 'react';
import {motion} from 'framer-motion';

const Header = () => {
    return(
        <header>
            <motion.div className="page-logo" animate={{rotateZ: 360}} transition={{duration: 2}} drag
            dragConstraints={{top:0 , left: 0 , bottom:0 , right: 0}} dragElastic={0.7}
            ></motion.div>
            <div className="bottom-line"></div>
        </header>
    )

}
export default Header;