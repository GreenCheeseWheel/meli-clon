import React from "react"

import {TfiSearch} from "react-icons/tfi"
import {GrLocation} from "react-icons/gr"
import {CgShoppingCart} from "react-icons/cg"

import meliLogo from "../assets/meli.png"
import meliDisney from "../assets/disney-plus.webp"
import arrow from "../assets/down-arrow.png"

import "../css/navbar.css"

export default function Navbar()
{

    const mouseOverHandler = (event) => {
        const dropdownMenu = event.target.nextElementSibling;
        dropdownMenu.style = "opacity: 1; pointer-events: all;";
        document.getElementsByClassName("filter").item(0).style = "background-color: rgba(0, 0, 0, .3); z-index: 1;"

    };

    const mouseLeaveHandler = (event) => {

        document.getElementsByClassName("dropdown").item(0).style = "opacity: 0; pointer-events: none;";
        document.getElementsByClassName("filter").item(0).style = "background-color: rgba(0, 0, 0, 0); z-index: 0;"
    }


    return (
        <section className="navbar">
            
            <div className="navbar--container">
                <div className="navbar--block">
                    <img className="navbar--logo" src={meliLogo}></img>

                    <div className="navbar--block---subblock">
                        <GrLocation className="navbar--link---sendto----icon"/>
                        <div className="navbar--link---sendto----span">
                            <span className="navbar--sendto---span----item">Enviar a </span>
                            <span className="navbar--sendto---span----item">Capital Federal </span>
                        </div>
                    </div>
                    
                </div>

                <div className="navbar--block">

                    <form className="navbar--search">
                        <input className="navbar--search---input" type="search" placeholder="Buscar productos, marcas y más..." />
                        <button className="navbar--search---submit" type="submit"> <TfiSearch /> </button>
                    </form>


                    <ul className="navbar--links">
                        <li className="navbar--links---item"  onMouseLeave={mouseLeaveHandler}>   



                            <a className="navbar--links---item----dropdown" > 
                                <span className="navbar--categories" onMouseOver={mouseOverHandler}>Categorías <img src={arrow} width="12" height="11"></img></span>
                                <div className="dropdown" onMouseLeave={mouseLeaveHandler}>
                                    <a className="dropdown--item">Vehículos</a>
                                    <a className="dropdown--item">Inmuebles</a>
                                    <a className="dropdown--item">Supermercados</a>
                                    <a className="dropdown--item">Tecnología</a>
                                    <a className="dropdown--item">Hogar y Muebles</a>
                                    <a className="dropdown--item">Electrodomésticos</a>
                                    <a className="dropdown--item">Herramientas</a>
                                    <a className="dropdown--item">Construcción</a>
                                    <a className="dropdown--item">Deportes y Fitness</a>
                                    <a className="dropdown--item">Accesorios para Vehículos</a>
                                    <a className="dropdown--item">Moda</a>
                                    <a className="dropdown--item">Juegos y Juguetes</a>
                                    <a className="dropdown--item">Beb&eacute;s</a>
                                    <a className="dropdown--item">Belleza y Cuidado Personal</a>
                                    <a className="dropdown--item">Salud y Equipamiento Médico</a>
                                    <a className="dropdown--item">Industrias y Oficinas</a>
                                    <a className="dropdown--item">Agro</a>
                                    <a className="dropdown--item">Productos Sustentables</a>
                                    <a className="dropdown--item">Servicios</a>
                                    <a className="dropdown--item">Más Vendidos</a>
                                    <a className="dropdown--item">Tiendas Oficiales</a>
                                    <a className="dropdown--item">Ver más Categorías</a>

                                </div>
                            </a>


                        </li>

                    

                        <li className="navbar--links---item"><a > Ofertas </a></li>
                        <li className="navbar--links---item"><a > Historial </a></li>
                        <li className="navbar--links---item"><a > Supermercado </a></li>
                        <li className="navbar--links---item"><a > Moda </a></li>
                        <li className="navbar--links---item"><a > Vender </a></li>
                        <li className="navbar--links---item"><a > Ayuda </a></li>
                    </ul>

                </div>

                <div className="navbar--block">
                    <img className="navbar--disney---offer" src={meliDisney}></img>
                
                

                    <nav className="navbar--menu">
                        <a className="navbar--menu---item">Creá tu cuenta</a>
                        <a className="navbar--menu---item">Ingresá</a>
                        <a className="navbar--menu---item">Mis compras</a>
                        <CgShoppingCart className="navbar--menu---item navbar--menu---icon" />
                    </nav>
                </div>

            </div>
        </section>
    );

}