import { Box, Flex} from "@chakra-ui/react"
import styles from "./styles/projectsSection.module.css"

export default function ProjectsSection() {
    return (
        <Box className={styles.sectionFive}>
            <Box h={200}></Box> {/* High level spacer*/}

            <Box align="center"> {/* title container */}
              <Box
                display="inline-block"
                color="white"
                backgroundColor="black"
                alignSelf="center"
                borderRadius={10}
                padding={5}
                fontSize={18}
                fontWeight={600}
              >
                My Projects and Other Experiences
              </Box>
            </Box>

            <Box h={50}></Box> {/* Spacer */}

            <Flex justify="center" pl={10} pr={10}> {/* Main Content Container */}
              <Box w={400} h={600} bg="black" borderRadius={10}>
                Content
              </Box>
              <Box w={10}/> {/* Spacer */}
              <Box w={400} h={600} bg="black" borderRadius={10}>
                Content
              </Box>
              <Box w={10}/> {/* Spacer */}
              <Box w={400} h={600} bg="black" borderRadius={10}>
                Content
              </Box>
            </Flex>

            <Box h={700}></Box> {/* Spacer */}
        </Box> /* End outer container */
    )
}