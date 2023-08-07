import { Box, Flex} from "@chakra-ui/react"
import styles from "./styles/projectsSection.module.css"
import studyBear from "./images/studyBear.png"
import monkeytype from "./images/monkeytype.png"
import studyBearSS from "./images/studyBearSS.png"
import typingGame from "./images/typingGame.png"
import useBreakpoint from 'use-breakpoint'

const BREAKPOINTS = { mobile: 0, tablet: 768, desktop: 1280 }

export default function ProjectsSection() {
    const { breakpoint, maxWidth, minWidth } = useBreakpoint(
      BREAKPOINTS,
      'desktop'
    )
    return (
        <Box className={styles.sectionFive}>
          
            <div id="projectsSection" /> {/* Anchor */}
            <Box align="center"> {/* title container */}
              <Box
                className="darkestBoxShadow"
                display="inline-block"
                color="white"
                backgroundColor="black"
                alignSelf="center"
                borderRadius={10}
                padding={5} pl={4} pr={4}
                fontSize={20}
                fontWeight={800}
              >
                My Projects and Other Experiences
              </Box>
            </Box>

            <Box h={50}></Box> {/* Spacer */}

            <Flex
              direction={ breakpoint === "mobile" ? "column" : "row"}
              justify="center"
              alignItems={ breakpoint === "mobile" ? "center" : null} 
              /*
                SideNode about flex boxes:
                  justify/justifyContent aligns along the main axis (specified by direction)
                  alignItems aligns along the cross axis (perpendicular to the main axis)
              */
            > {/* Main Content Container */}

              {/* StudyBear Container */}
              <Box
                className="darkestBoxShadow"
                bg="black" 
                borderRadius={10}
                padding={10}
                pl={30} pr={30}
                mb={10}
                color="white"
                fontSize={16}
                fontWeight={500}
                style={{
                  position: "relative"
                }}
                width={ breakpoint === "mobile"? "95%" : "40%"}
              >
                <img src={studyBear.src} alt="studyBear"
                  style={{
                    "max-width": "none",
                    width: 60,
                    position: "absolute",
                    top: 20,
                    right: 20
                  }}
                />
                <Box fontSize={24} fontWeight={900}>Study Bear </Box>
                <Box as='i'>FullStack Decal Final Project</Box>
                <Box h={5}></Box> {/* Spacer */}
                <Box mb={3}>Web application designed to help students find study groups around berkeley.</Box>
                <Box mb={3}>Focused on frontend development using React, creating dynamic and interactive React components / pages</Box>
                <Box mb={3}>Design and implementation of inuitive UI/UX design</Box>
                
                <Box h={10}/> {/* Spacer */}
                <Box align="center">
                  <img src={studyBearSS.src} alt="studyBear"
                    style={{
                      "max-width": "none",
                      width: "85%",
                    }}
                  />
                </Box>

              </Box>
              <Box w={10}/> {/* Spacer */}
              

              {/* Typing Game Container */}
              <Box
                className="darkestBoxShadow"
                bg="black" 
                borderRadius={10}
                padding={10}
                pl={30} pr={30}
                mb={10}
                color="white"
                fontSize={16}
                fontWeight={500}
                style={{
                  position: "relative"
                }}
                width={ breakpoint === "mobile"? "95%" : "40%"} 
              >
                <img src={monkeytype.src} alt="monkeytype"
                  style={{
                    "max-width": "none",
                    width: 60,
                    position: "absolute",
                    top: 20,
                    right: 20
                  }}
                />
                <Box fontSize={24} fontWeight={900}>Personal Typing Game</Box>
                <Box as='i'>Based On Monkeytype</Box>
                <Box h={5}></Box> {/* Spacer */}
                <Box mb={3}>Racing Typing game based on monkeytype.com</Box>
                <Box mb={3}>Use of raw html / css / javascript to create a smooth and responive user experience.</Box>
                <Box mb={3}>Use of flask to manage logic behind the game state and store / manage data.</Box>

                
                <Box h={10}/> {/* Spacer */}
                
                <Box align="center">
                  <img src={typingGame.src} alt="studyBear"
                    style={{
                      "max-width": "none",
                      width: "85%",
                    }}
                  />
                </Box>
              </Box>

            </Flex>

            <Box h={700}></Box> {/* Spacer */}
        </Box> /* End outer container */
    )
}