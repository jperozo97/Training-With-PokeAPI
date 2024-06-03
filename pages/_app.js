import { Component } from "react"
import "../styles/globals.css"
import { RootLayout } from "@/layout/layout"

const MyApp = ({Component, pageProps}) => {
    return (
        <RootLayout>
            <Component {...pageProps}/>
        </RootLayout>
    )
}

export default MyApp;