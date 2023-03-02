import React, { useEffect, useState } from "react"

import meliLogo from "../assets/meli.png"

import {TfiSearch} from "react-icons/tfi"
import {CgShoppingCart} from "react-icons/cg"
import {GrLocation} from "react-icons/gr"


import "../css/navbartiny.css"
import BurgerMenu from "./BurgerMenu"

export default function NavbarTiny(props)
{

    const [openMenu, setOpenMenu] = useState(false);

    function clickHandlerBgr(event) {
        document.getElementsByClassName("linebar1").item(0).classList.toggle("linebar1_anim");
        document.getElementsByClassName("linebar2").item(0).classList.toggle("linebar2_anim");
        document.getElementsByClassName("linebar3").item(0).classList.toggle("linebar3_anim");

        document.getElementsByClassName("navbartiny").item(0).style = !openMenu ? "height: max-content" : "height: 102px;"

        setOpenMenu(prevState => !prevState);

    }
    



    return(

        <section className="navbartiny">

            <div className="navbartiny--container">
                <div className="navbartiny--block">
                    <img className="navbartiny--logo" src={meliLogo}></img>
                </div>

                <form className="navbartiny--search">
                        <input className="navbartiny--search---input" type="search" placeholder="Buscar productos, marcas y más..." />
                        <button className="navbartiny--search---submit" type="submit"> <TfiSearch /> </button>
                </form>

                <div className="burgermenu" onClick={clickHandlerBgr}>
                    <span className="linebar linebar1"></span>
                    <span className="linebar linebar2"></span>
                    <span className="linebar linebar3"></span>
                </div>

                <CgShoppingCart className="shopping-cart" />

                {
                    openMenu 
                    ? 
                    <BurgerMenu />
                    :
                    <div className="enviar"><div><GrLocation className="enviar--logo"/> <span>Enviar a Capital Federal</span></div> <div className="enviar--arrow"></div> </div>
                    
                }
                
            </div>
        </section>

    )

}