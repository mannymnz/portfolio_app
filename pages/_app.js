import "../styles/app.css"
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from "../components/navbar"
import { Box, Flex } from "@chakra-ui/react"
import styles from "../components/navbar.module.css"
import "../styles/global.css"
import Head from 'next/head';

export default function App({ Component, pageProps }) {
    return (
        <ChakraProvider>
            <Head>
                <title>Manuel Munoz</title>
                <meta property="og:title" content="Manuel Munoz" key="title"/>
                <link rel="icon" href='/oskiHead.png'></link>
            </Head>
            <Navbar />
            <Component {...pageProps} />
        </ChakraProvider>
    )
  }