import React from "react";

import "../css/related.css"

export default function Related() 
{

    return (
        <section className="related">
            <div className="related--division">
                <div className="related--division---listcontain">
                <span>También puede interesarte: </span> 
                <ul className="related--list">
                    <li><a className="related--link">Celulares blue</a></li>
                    <li className="separator"> - </li>
                    <li><a className="related--link">Celulares caros</a></li>
                    <li className="separator">-</li>
                    <li><a className="related--link">moto e6i</a></li>
                    <li className="separator">-</li>
                    <li><a className="related--link">iphone 5</a></li>
                </ul>
                </div>    
            </div>

            <div className="related--division">
                <div className="related--division---listcontain">
                    <span> <a className="related--return">Volver al listado   |</a> </span>

                    <ul className="related--list">
                        <li><a>Celulares y teléfonos</a></li>
                        <li className="separator"> {">"} </li>
                        <li><a>Celulares y smartphones</a></li>
                    </ul>
                </div>
                <div className="related--division---listcontain">
                    <a className="related--interaction">Compartir</a>
                    <span className="separator"> | </span>
                    <a className="related--interaction">Vender uno igual</a>
                </div>
            </div>
        </section>
    );

}