import { Box, Flex} from "@chakra-ui/react"
import styles from "./styles/projectsSection.module.css"
import studyBear from "./images/studyBear.png"
import monkeytype from "./images/monkeytype.png"
import studyBearSS from "./images/studyBearSS.png"
import BYOW from "./images/BYOW.png"
import rPi from "./images/rPi.png"
import rPiSetup from "./images/rPiSetup.png"
import earth from "./images/earth.png"

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

            <Box h={100}></Box> {/* Spacer */}

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

            <Flex /* top row container */
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
                  <Box as="i" fontSize={12} >the completed website</Box>
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
                  <Box as="i" fontSize={12} >Middle of typing game, displaying the users speed {"(WPM)"} at the top</Box>
                </Box>
              </Box>

            </Flex>
                    
            <Flex /* second row continaer */
              direction={ breakpoint === "mobile" ? "column" : "row"}
              justify="center"
              alignItems={ breakpoint === "mobile" ? "center" : null} 
            >

              {/* RPUS container */}
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
                <img src={rPi.src} alt="studyBear"
                  style={{
                    "max-width": "none",
                    width: 60,
                    position: "absolute",
                    top: 20,
                    right: 20
                  }}
                />
                <Box fontSize={24} fontWeight={900}>Raspberry Pi Utility Server {"(RPUS)"} </Box>
                <Box as='i'>Actively Being Developed</Box>
                <Box h={5}></Box> {/* Spacer */}
                <Box mb={3}>
                  Created a server using flask hosted on Raspberry Pi providing various utilities accessible via API endpoints including:
                </Box>

                <Box fontSize={14} ml={4} fontWeight={300} mb={3}>
                  Bot for sending personal reminder notifications via email / sms<br />
                  Ability to control nearby lights, screens, and other accessory via 2.4 ghz transeivers<br />
                  SMS chatbot hooked up to OpenAi API for ease of access from anywhere

                </Box>

                <Box mb={3}>Created IOS interface using Swift for accessing API endpoints I created from my personal phone</Box>
                <Box mb={3}>Actively stored data in a PostgreSQL database hosted by AWS RDS</Box>
                
                <Box h={10}/> {/* Spacer */}
                <Box align="center">
                  <img src={rPiSetup.src} alt="rpiSetup"
                    style={{
                      "max-width": "none",
                      width: "85%",
                    }}
                  />
                  <Box as="i" fontSize={12} mt={3}>The server setup, including tranceiver modules and display</Box>
                </Box>

              </Box>
              <Box w={10}/> {/* Spacer */}
              

              {/* BYOW container */}
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
                <img src={earth.src} alt="monkeytype"
                  style={{
                    "max-width": "none",
                    width: 68,
                    position: "absolute",
                    top: 20,
                    right: 23
                  }}
                />
                <Box fontSize={24} fontWeight={900}>{"Build Your Own World (BYOW)"}</Box>
                <Box as='i'>School Project</Box>
                <Box h={5}></Box> {/* Spacer */}
                <Box mb={3}>Top-down style video game created in Java with Princeton's stdDraw library</Box>
                <Box mb={3}>Creation of algorithms for random generation of world layout in every play through based on a seed</Box>
                <Box mb={3}>Algorithms for procedural world generation, creating a constantly evolving experience.</Box>
                <Box mb={3}>Creation of complex data structues to handle game state and logic</Box>

                
                <Box h={70}/> {/* Spacer */}
                
                <Box align="center" className="darkestBoxShadow">
                  <img src={BYOW.src} alt="BYOW"
                    style={{
                      "max-width": "none",
                      width: "85%",
                    }}
                  />
                  <Box as="i" fontSize={12} mt={3}>Player must explore while the world is engulfed in lava</Box>
                </Box>

              </Box>

            </Flex>




            <Box h={700}></Box> {/* Spacer */}
        </Box> /* End outer container */
    )
}