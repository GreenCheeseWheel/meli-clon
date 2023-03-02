import React from "react"
import "../css/burgermenu.css"

import {BiUserCircle} from "react-icons/bi"
import {BsTag, BsBasket, BsShop, BsListTask} from "react-icons/bs"
import {AiOutlineClockCircle} from "react-icons/ai"
import {GrHomeRounded} from "react-icons/gr"
import {TfiHeadphoneAlt} from "react-icons/tfi"
import {IoShirtOutline} from "react-icons/io5"
import {ImStarEmpty} from "react-icons/im"
import {RiFileListLine} from "react-icons/ri"
import {HiDownload} from "react-icons/hi"

export default function BurgerMenu()
{

    return (
        
        <section className="bgr">
            <div className="bgr--login">
                <BiUserCircle className="bgr--login---fig"/>
                <div className="bgr--login---content">
                    <p>Bienvenido</p>
                    <span>Ingresá a tu cuenta para ver tus compras, favoritos, etc</span>
                    <div className="login--content---btns">
                        <button>Ingresá</button>
                        <button>Creá tu cuenta</button>
                    </div>
                </div>
            </div>
            <div className="bgr--menu">
                <ul>
                    <li><GrHomeRounded className="item--icon"/> Inicio</li>
                    <li><BsTag className="item--icon"/> Ofertas</li>
                    <li><AiOutlineClockCircle className="item--icon"/> Historial</li>
                    <li><TfiHeadphoneAlt className="item--icon"/> Ayuda</li>
                </ul>
                <ul>
                    <li><BsBasket className="item--icon"/> Supermercado</li>
                    <li><IoShirtOutline className="item--icon"/> Moda</li>
                    <li><ImStarEmpty className="item--icon"/> Más vendidos</li>
                    <li><BsShop className="item--icon"/> Tiendas oficiales</li>
                    <li><BsListTask className="item--icon"/> Categorías</li>
                </ul>
                <ul>
                    <li><RiFileListLine className="item--icon"/> Resumen</li>
                    <li><BsTag className="item--icon"/> Vender</li>
                </ul>
                <ul>
                    <li><HiDownload className="item--icon"/> ¡Comprá y vendé con la app!</li>
                </ul>
            </div>
        </section>
        
    )
    
}