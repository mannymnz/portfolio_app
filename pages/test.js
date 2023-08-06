import { Box } from "@chakra-ui/react"
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef } from 'react'
import { motion } from "framer-motion"
import BounceInSide from "../components/animations/bounseInSide";
import { AnimationOnScroll } from "react-animation-on-scroll";


export default function Test() {
    return (
        <Box align="center">
            <Box >element 1</Box>
            
            <AnimationOnScroll animateIn='animate__bounceInLeft' animateOut='animate__bounceOutLeft' duration={0.8}>
                <Box fontSize='50px' w={100} h={100}>What is RMTC?</Box>
            </AnimationOnScroll>

            <BounceInSide startX={-100} duration={1.0}>
                <Box h={500} w={500} bg="purple">
                </Box>
            </BounceInSide>

            <motion.div
                style={{
                    height: 50,
                    width: 50,
                    "background-color": "blue"
                }}
                initial={{x: 300}}
                animate={{ x: 0}}
                transition={{duration: 2}}

            >

            </motion.div>

            <Box h={200}></Box>
            {/*<Box align="center">
                <motion.div
                    style={{
                        height: 50,
                        width: 50,
                        "background-color": "red"
                    }}
                    initial={{ x: -300, scale: 1}}
                    animate={{ x: [-300, 300, 0], scale: [1, 5, 1], rotate: [0, 180, 0]}}
                    transition={{ duration: 3, time: [0, 1, 2], ease: "easeInOut", repeat: Infinity}}
                >
                </motion.div>
                </Box>*/}


            <Box h={1000}></Box>
            <Box >element 2</Box>
        </Box>
    )
}