import { Box, Flex } from '@chakra-ui/react'
import styles from "./styles/whatnotSection.module.css"
import whatnotLogo from "./images/whatnotLogo.png"
import AJ1 from "./images/AJ1.png"
import funkoPop from "./images/funkoPop.png"
import pokemonCard from "./images/pokemonCard.png"
import comicBooks from "./images/comicBooks.png"

import useBreakpoint from 'use-breakpoint'
import BounceInSide from '../animations/bounseInSide'

const BREAKPOINTS = { mobile: 0, tablet: 768, desktop: 1280 }
/*
    The whatnot section within of the home page
    transitions white -> yellow
*/
export default function WhatnotSection() {
    const { breakpoint, maxWidth, minWidth } = useBreakpoint(
      BREAKPOINTS,
      'desktop'
    )
    return (
        <Box className={styles.sectionTwo} style={{position: "relative"}}>

        <Box h={270}></Box> {/* Spacer */}
        
        <div id="experiencesSection" /> {/* Anchor */}

        <Box h={100}></Box> {/* Spacer */}

        <Flex justify="center" position="relative"> {/* The actual box itself */}

        <Box
          className="darkestBoxShadow"
          backgroundColor="black"
          color="white"
          m={30}
          w={750}
          borderRadius={15}
          style={{
            position: "relative"
          }}
        >
          {/* All these images are absolute positioned */}
          <img src={whatnotLogo.src} alt="whatnot"
          style={{
            "max-width": "none",
            width: (breakpoint === "mobile" ? 60: 100),
            position: "absolute",
            top: 20,
            right: 20
          }}
          />

          {breakpoint === "desktop" && ( /* Only render these on large screens */
            <>
                <img
                src={funkoPop.src}
                className={styles.dropShadow}
                style={{
                  "max-width": "none",
                  transform: "rotate(-10deg)",
                  width: 180,
                  position: "absolute",
                  top: -30,
                  right: -190
                }}
              />
              
              <img
                className={styles.dropShadow}
                src={AJ1.src}
                style={{
                  "max-width": "none",
                  transform: "rotate(10deg)",
                  width: 190,
                  position: "absolute",
                  bottom: -40,
                  right: -220
                }}
              />
              
              <img
                className={styles.dropShadow}
                src={pokemonCard.src}
                style={{
                  "max-width": "none",
                  transform: "rotate(10deg)",
                  width: 90,
                  position: "absolute",
                  bottom: 0,
                  left: -150
                }}
              />
              
              <img
                className={styles.dropShadow}
                src={comicBooks.src}
                style={{
                  "max-width": "none",
                  transform: "rotate(-10deg)",
                  width: 220,
                  position: "absolute",
                  top: -10,
                  left: -240
                }}
              />
            </>
          )}

          <Box p={8} pb={0} fontSize={24} fontWeight={900}>Whatnot {"(W20)"} </Box>
          <Box p={8} pt={0} fontSize={20} fontWeight={400}>Software Engineer Intern</Box>

          <Box pl={10} w="90%" fontSize={16} fontWeight={500} pb={10}> {/* The main content of the seciton*/}
            <Box fontWeight={900}>Overview</Box>
            <Box mb={3}>Worked at a fast-paced startup as part of their discovery team, aiming to maximize user experience through search and browse.</Box>
            <Box mb={3}>Led engineering of a project to implement saved searching on the platform.</Box>
            <Box fontWeight={900}>Backend</Box>
            <Box mb={3}>Created client oriented API endpoints using GraphQL and Flask. Managed a PostgreSQL database for storing data</Box>
            <Box fontWeight={900}>Frontend</Box>
            <Box mb={3}>Used React to create efficient, user-centered interfaces.</Box>
            <Box mb={3}>Collected user metrics through logging and conducted data analysis to measure impact. </Box>
            <Box mb={3}>Projct credited with 4% increase in daily active users over a 3 month period</Box>
          </Box>
          
        </Box>
      
        </Flex>
        
        <Box h={200}></Box> {/* Spacer */}
        
      </Box>
    )
}