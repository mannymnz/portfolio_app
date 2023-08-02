import { Box, Flex } from '@chakra-ui/react'
import styles from "./styles/whatnotSection.module.css"
import whatnotLogo from "./images/whatnotLogo.png"

/*
    The whatnot section within of the home page
    transitions white -> yellow
*/
export default function WhatnotSection() {
    return (
        <Box h={900} className={styles.sectionTwo} style={{position: "relative"}}>

        <Box h={370}></Box> {/* Spacer */}
        
        <Flex justify="center" position="relative"> {/* The actual box itself */}

        <Box
          backgroundColor="black"
          color="white"
          m={30}
          w={750}
          borderRadius={15}
          style={{
            position: "relative"
          }}
        >
          <img src={whatnotLogo.src} alt="whatnot"
          style={{
            "max-width": "none",
            width: 100,
            position: "absolute",
            top: 20,
            right: 20
          }}
          />
          <Box p={8} fontWeight={700} fontSize={17}>Software Engineer Intern • Whatnot {"(W20)"} </Box>
          <Box h={300} p={5}>
            more content
          </Box>
        </Box>
        </Flex>

      </Box>
    )
}