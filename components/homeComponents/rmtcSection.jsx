import { Box, Flex } from "@chakra-ui/react"
import styles from "./styles/rmtcSection.module.css"
import rmtcLogo from "./images/rmtcLogo.png"
import therapy1 from "./images/therapy1.png"
import therapy2 from "./images/therapy2.webp"
import therapy3 from "./images/therapy3.png"
import therapy4 from "./images/therapy4.png"
import useBreakpoint from 'use-breakpoint'

const BREAKPOINTS = { mobile: 0, tablet: 768, desktop: 1280 }

export default function RateMyTherapyCompanySection() {
    const { breakpoint, maxWidth, minWidth } = useBreakpoint(
      BREAKPOINTS,
      'desktop'
    )
    return (
        <Box className={styles.sectionThree}>
            <Flex justify="center">
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
                <img src={rmtcLogo.src} alt="rmtc"
                  style={{
                    "max-width": "none",
                    width: 120,
                    position: "absolute",
                    top: 20,
                    right: 25
                  }}
                />

                {breakpoint === "desktop" && ( /* Only render these on large screens */
                  <>
                    <img
                      className={styles.dropShadow}
                      src={therapy1.src}
                      style={{
                        "max-width": "none",
                        transform: "rotate(-10deg)",
                        width: 200,
                        position: "absolute",
                        top: -40,
                        left: -250
                      }}
                    />
                    <img
                      className={styles.dropShadow}
                      src={therapy2.src}
                      style={{
                        "max-width": "none",
                        transform: "rotate(-10deg)",
                        width: 210,
                        position: "absolute",
                        bottom: -10,
                        right: -230
                      }}
                    />
                    <img
                      className={styles.dropShadow}
                      src={therapy3.src}
                      style={{
                        "max-width": "none",
                        transform: "rotate(-10deg)",
                        width: 210,
                        position: "absolute",
                        top: -40,
                        right: -220
                      }}
                    />
                    <img
                      className={styles.dropShadow}
                      src={therapy4.src}
                      style={{
                        "max-width": "none",
                        transform: "rotate(-10deg)",
                        width: 190,
                        position: "absolute",
                        bottom: -10,
                        left: -240
                      }}
                    />
                  </>
                )}

                <Box p={8}  pb={0} fontSize={24} fontWeight={900}> RateMyTherapyCompany</Box>
                <Box p={8} pt={0} fontSize={20} fontWeight={400}> CoFounder & lead Engineer</Box>

                <Box pl={10} w="90%" fontSize={16} fontWeight={500} pb={10}> {/* The main content of the seciton*/}
                    <Box fontWeight={900}>Overview</Box>
                    <Box mb={3}> Cofounded and led development of RateMyTherapyCompany, aiming to help traveling healthcare specialists find and review contractural Jobs. Currently serving 60+ daily active users</Box>
                    <Box fontWeight={800}>What I did</Box>
                    <Box mb={3}>Handled complete user login / signup flow, including secure authentication via encryption and flows for verifying contact information and resetting accoutn information via automated email.</Box>
                    <Box mb={3}>Managed and handled data from 200+ companies and accounts into a NoSQL MongoDB database. Made use of advanced search indices, pagination, and custom filtering to deliver this data via endpoints
                        to users.
                    </Box>
                    <Box>
                        Created and implemented client designs, following essential techniques for good UI/UX design to make the experience
                        user-centered
                    </Box>
                </Box>

            </Box>

            </Flex>

            <Box h={400}></Box> {/* Spacer */}
        </Box>
    )
}
