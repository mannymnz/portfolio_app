import "../styles/app.css"
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from "../components/navbar"
import { Box, Flex } from "@chakra-ui/react"
import styles from "../components/navbar.module.css"
import "../styles/global.css"

export default function App({ Component, pageProps }) {
    return (
        <ChakraProvider>
            <Navbar />
            <Component {...pageProps} />
        </ChakraProvider>
    )
  }