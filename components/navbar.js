import { Flex, Box } from '@chakra-ui/react'
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
    const scrollTo = (id) => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth"
      })
    }
    return (
        <>
            {/* This box is absolutely positioned, to display the background gradient without interrupting flow*/}
            {/* z-index is -1 */}
            <Box 
              className={styles.verticalGradientBox}
              height={250}
              width="100vw"
            />

            <Box className={styles.stickyContainer}>
              <FadeIn> {/* FadeIn disrupts sticky css, so needs to be inside of the sticky container */}
                <Flex justifyContent="center" color="white" fontWeight={600} p={7} fontSize={17}>

                  <Box
                    className={`${styles.navBarLink} grow-on-hover`}
                    onClick={() => scrollTo("pageTop")}
                  > 
                    Top
                  </Box>
                  <Box className={styles.spacer} w={10} />

                  <Box
                    className={`${styles.navBarLink} grow-on-hover`}
                    onClick={() => scrollTo("experiencesSection")}
                  >
                    Experiences
                  </Box>

                  <Box classname={styles.spacer} w={10}/>

                  <Box
                    className={`${styles.navBarLink} grow-on-hover`}
                    onClick={() => scrollTo("projectsSection")}
                  >
                    Projects
                  </Box>

                  <Box className={styles.spacer} w={10}/>

                  <Box
                    className={`${styles.navBarLink} grow-on-hover`}
                    onClick={() => scrollTo("pageTop")}
                  >
                    {breakpoint === "mobile"? "Abt" : "About Me"}
                  </Box>
                </Flex>
              </FadeIn>
            </Box>

          <Box
            h={5}
          >
          </Box>

        </>
    )
}