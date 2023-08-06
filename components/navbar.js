import { Flex, Box } from '@chakra-ui/react'
import github from "../public/indexImages/github.png"
import linkedIn from "../public/indexImages/linkedIn.png"
import gmail from "../public/indexImages/gmail.png"
import campanile from "../public/indexImages/campanile.png"
import mainPersonalPic from "../public/indexImages/mainPersonalPic.png"
import headShot from "../public/indexImages/head_shot.jpg"
import styles from "./navbar.module.css"
import useBreakpoint from 'use-breakpoint'
import FadeIn from 'react-fade-in/lib/FadeIn'

/*
    The basic navbar, contains links to different sections
*/
const BREAKPOINTS = { mobile: 0, tablet: 768, desktop: 1280 }

export default function Navbar() {
    const { breakpoint, maxWidth, minWidth } = useBreakpoint(
      BREAKPOINTS,
      'desktop'
    )

    return (
        <>
            {/* This box is absolutely positioned, to display the background gradient without interrupting flow*/}
            {/* z-index is -1 */}
            <Box 
              className={styles.verticalGradientBox}
              height={250}
              width="100vw"
            />

            <FadeIn>
            <Flex justifyContent="center" color="white" fontWeight={600} p={7} fontSize={17}
              className={styles.mainFlexBox}
            >
              <Box className={`${styles.navBarLink} ${styles["grow-on-hover"]}`} >Top</Box>
              <Box className={styles.spacer} w={10}/>
              <Box className={`${styles.navBarLink} ${styles["grow-on-hover"]}`}>Experiences</Box>
              <Box classname={styles.spacer} w={10}/>
              <Box className={`${styles.navBarLink} ${styles["grow-on-hover"]}`}>Projects</Box>
              <Box className={styles.spacer} w={10}/>
              <Box className={`${styles.navBarLink} ${styles["grow-on-hover"]}`}>
                {breakpoint === "mobile"? "Abt" : "About Me"}
              </Box>
          </Flex>
          </FadeIn>
          <Box
            h={5}
          >
          </Box>

        </>
    )
}