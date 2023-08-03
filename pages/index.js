import styles from "../styles/index.module.css"
import { Flex, Box } from '@chakra-ui/react'
import github from "../public/indexImages/github.png"
import linkedIn from "../public/indexImages/linkedIn.png"
import gmail from "../public/indexImages/gmail.png"
import campanile from "../public/indexImages/campanile.png"
import headShot from "../public/indexImages/head_shot.jpg"
import useBreakpoint from 'use-breakpoint'
import WhatnotSection from "../components/homeComponents/whatnotSection"
import RateMyTherapyCompanySection from "../components/homeComponents/rmtcSection"
import ProjectsSection from "../components/homeComponents/projectsSection"

const BREAKPOINTS = { mobile: 0, tablet: 768, desktop: 1280 }

export default function HomePage() {
    const { breakpoint, maxWidth, minWidth } = useBreakpoint(
      BREAKPOINTS,
      'desktop'
    )
    console.log("the current breakpoint: ", breakpoint)
    return (
      <div>
        <Box className={styles.spacer} h={breakpoint == "desktop" || breakpoint == "tablet" ? 150 : 10}/>
        
        <Flex justify="center" pr={breakpoint=="desktop"? 150 : null}>
            <Box className={styles.spacer} w={50}></Box>

            <Flex className={styles.centerContainer} justify="center" position="relative"> {/* Center section on the top page */}

              { (breakpoint === "tablet" || breakpoint === "desktop") && (
              <> {/* campanile pic section*/}
                <Box className={styles.spacer} w={520}/> {/* this spacer is to leave room for the campanile pic, which is abs position*/}
                <img
                  src={campanile.src}
                  display="inline-block"
                  style={{
                    position: "absolute", /* absolute pos isn't supported by chakra ui*/
                    top: -150,
                    left: 160,
                    width: "600px",
                    "z-index": 2,
                  }}
                />
              </>
              )}

              <Box w={90}></Box>
              

              <Box> {/* Outer center container*/}
                <Box className={styles.spacer} h={2}/>
                
                <img
                  src={linkedIn.src}
                  alt="linkedin"
                  style={{
                    transform: "rotate(-10deg)",
                    width: "58px !important",
                    "max-width": "none",
                  }}
                />

                <Box className={styles.spacer} h={5}/>
                <img
                  src={github.src}
                  alt="github"
                  width={58}
                  display="inline-block"
                  style={{
                    transform: "rotate(10deg)",
                    "max-width": "none",
                  }}
                />
                <Box classname={styles.spacer} h={5}/>
                <img
                  src={gmail.src}
                  alt="gmail"
                  width={58}
                  display="inline-block"
                  style={{
                    transform: "rotate(-10deg)",
                    "max-width": "none",
                  }}
                />
              </Box>

              <Box className={styles.spacer} w={8}/>

              <Box>
                <Box
                  fontSize={22}
                  fontWeight={400}
                >
                  Hello, I'm,
                </Box>
                <Box
                  fontSize={50}
                  fontWeight={600}
                  lineHeight={"55px"}
                >
                  Manuel Munoz
                </Box>

                <Box 
                  fontSize={25}
                  fontWeight={400}
                >
                  Berkeley EECS '25 • Software Engineer
                </Box>

                <Box
                  className={styles.viewMyResumeButton}
                  display="inline-block"
                  backgroundColor="#3AB1C1"
                  color="white"
                  padding="10px 20px 10px 20px"
                  fontWeight={500}
                  borderRadius={10}
                  onClick={() => alert("hello")}
                  margin="10px 0px 10px 0px"
                  style={{
                    "box-shadow": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                  }}
                >
                  View My Resume
                </Box>

                <Box
                  w="70%"
                  color="#3AB1C1"
                  fontWeight={600}
                  fontSize={17}
                >
                  Full Stack Development • Python • JS • React • Flask • GraphQL • NoSQL • SQL • Leadership • Team Player
                </Box>
              </Box>
            </Flex>

            { breakpoint === "desktop" && (
            <Box
              className={styles.imagesContainer}
              backgroundColor="gray.300"
              borderRadius={10}
              ml="25px"
              h={350}
              w={350}
              style={{
                position: "relative !important",
                bottom: 40,
                "box-shadow": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                "max-width": "none",
              }}
            >
              <img src={headShot.src}
                style={{
                  width:"350px",
                  borderRadius:"10px",
                  "box-shadow": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  "max-width": "none",
                }}
              />

            </Box>
            )}

        </Flex>

        {/* The Experience Section of the Website */}
        <WhatnotSection />
        <RateMyTherapyCompanySection />
        <ProjectsSection />

      </div>
    )
  }