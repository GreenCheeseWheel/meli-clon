import React from "react";

import shippingTruck from "../assets/pdp/truck.svg"
import trophy from "../assets/pdp/trophy.svg"
import shield from "../assets/pdp/shield.svg"
import ribbon from "../assets/pdp/ribbon.svg"
import arrow from "../assets/pdp/arrow.svg"

import {CiLocationOn} from "react-icons/ci"

export default function EnvioInfo()
{

    return (
        <>
            <div className="envio--container product--form---container">
                            
                            <figure className="envio--figure"><img src={shippingTruck}></img></figure>
                            <div className="envio--text">
                                <span className="envio--text---title">Envío gratis a todo el país</span>
                                <p className="envio--text---subtitle">Conocé los tiempos y las formas de envío</p>
                                <a className="envio--text---ref" href="#"> <CiLocationOn /> Calcular cuándo llega</a>
                            </div>
                        

                    </div>
                    <div className="product--form---container">
                        <div className="info--seller">
                            <span>Vendido por <a className="info--seller---soldby">OVERHARD</a></span>
                            <p className="info--seller---status">Mercado lider | +10mil ventas</p>
                            <p className="info--seller---documentation">Hace factura A</p>
                        </div>    
                    </div>
                    <div className="product--form---container">
                        <p> Stock disponible </p>
                    </div>

                    <div className="product--form---container">
                        <span>Cantidad: 1 unidad (19 disponibles)</span>
                    </div>
                    
                    <div className="product--form---container">
                        <button className="product--form---btn"><span className="product--form---btn----text">Comprar ahora</span></button>
                    </div>

                    <div className="product--form---container">
                        <ul className="product--form---benefits">
                            <li><div className="product--form---benefits----item"><figure><img src={arrow} className="product--benefits---img"></img></figure> <p><a href="https://articulo.mercadolibre.com.ar/noindex/freeReturn/fashion?itemId=MLA1323513118&quantity=1&new_version=true&modal=false&controlled=true">Devolución gratis</a> Tenés 30 días desde que lo recibís</p></div></li>
                            <li><div className="product--form---benefits----item"><figure><img src={shield}className="product--benefits---img"></img></figure> <p><a>Compra protegida</a> Recibí el producto que esperabas o te devolvemos tu dinero</p></div></li>
                            <li><div className="product--form---benefits----item"><figure><img src={trophy} className="product--benefits---img"></img></figure> <p><a>Mercado puntos</a> Sumás 307 puntos</p></div></li>
                            <li><div className="product--form---benefits----item"><figure><img src={ribbon} className="product--benefits---img"></img></figure> <p>12 meses de garantía de fábrica</p></div></li>
                        </ul>
                    </div>

        </>
    );

}