import { Box, Flex } from "@chakra-ui/react"
import styles from "./styles/rmtcSection.module.css"

export default function RateMyTherapyCompanySection() {
    return (
        <Box h={1000} className={styles.sectionThree}>
            <Box h={700}></Box> {/* Spacer */}
            <Flex justify="center">
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
                <img src={""} alt="rmtc"
                style={{
                "max-width": "none",
                width: 120,
                position: "absolute",
                top: 20,
                right: 20
                }}
                />
                <Box p={8} fontWeight={700} fontSize={17}> CoFounder & lead Engineer • RateMyTherapyCompany </Box>
                <Box h={300} p={5}>
                more content
                </Box>
            </Box>
            </Flex>
        </Box>
    )
}
