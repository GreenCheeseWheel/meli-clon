import React, { useState } from "react"

import Navbar from "./components/Navbar"
import Main from "./components/Main"
import NavbarTiny from "./components/NavbarTiny"


export default function App()
{

    const [innerWidth, setInnerWidth] = useState(window.innerWidth);

    window.onresize = () => {
        setInnerWidth(window.innerWidth);
    }

    return (
        <>
            
            {innerWidth > 1200 ? <Navbar /> : <NavbarTiny width={innerWidth} />}
            <Main />
        </>
    )

}