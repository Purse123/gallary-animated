import React from 'react'
import { motion } from 'framer-motion'
import Text from './Text'
// import transition from '../page_transition/Transition'

const Welcome = () => {

    const bgAnimation = {
        hidden: {
            clipPath: 'polygon(21% 27%, 77% 27%, 77% 77%, 21% 77%)'
        },
        visible: {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            transition: {
                ease: "easeInOut",
                duration: 1.5,
                delay: 1
            }
        },
    }

  return (
    <div className='h-screen w-full relative overflow-hidden'>
        <motion.div className='h-full w-full flex items-center justify-center bg-hero-image bg-center bg-no-repeat bg-cover brightness-[40%]'
        variants={bgAnimation} initial="hidden" animate="visible"
        >
        </motion.div>
        
        {/* after 3 or 2.5 sec scale will be small */}
        <Text/>
    </div>
  )
}

// export default transition(Welcome); 
export default Welcome; 