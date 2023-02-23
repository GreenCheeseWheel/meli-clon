import React, { useEffect, useState } from "react";


import phoneFront from "../assets/product/phone-front.webp"
import phoneBack from "../assets/product/phone-back.webp"
import phoneSide from "../assets/product/phone-side.webp"
import heartActive from "../assets/product/heart-active.svg"
import heartInactive from "../assets/product/heart-inactive.svg"

import mercadoCredito from "../assets/pms/mercado-credito.svg"
import visaCredito from "../assets/pms/visa-credito.svg"
import americanExpress from "../assets/pms/american-express.svg"
import mastercardCredito from "../assets/pms/mastercard-credito.svg"
import naranjaCredito from "../assets/pms/naranja-credito.svg"

import visaDebito from "../assets/pms/visa-debito.svg"
import maestroDebito from "../assets/pms/maestro-debito.svg"
import mastercardDebito from "../assets/pms/mastercard-debito.svg"
import cabalDebito from "../assets/pms/cabal-debito.svg"

import pagofacilEfectivo from "../assets/pms/pagofacil-efectivo.svg"
import rapipagoEfectivo from "../assets/pms/rapipago-efectivo.svg"


import "../css/product.css"
import "../css/characteristics.css"
import EnvioInfo from "./EnvioInfo";
import SellerInfo from "./SellerInfo";


import {RiSmartphoneLine} from "react-icons/ri"
import {CgSmartphoneChip} from "react-icons/cg"
import {SlScreenSmartphone} from "react-icons/sl"
import {IoFingerPrint} from "react-icons/io5"
import {FaStar} from "react-icons/fa"
import {FaStarHalf} from "react-icons/fa"
import Related from "./Related";


export default function Product()
{
    
    const [heartFilled, setHeartFilled] = useState(heartInactive);


    const changeFavourite = () => {
        setHeartFilled(prev => {
            
            return (prev == heartInactive) ? heartActive : heartInactive;

        });
    }

    const changeProductDisplay = (event) => {
        const targetImage = event.target.src;
        document.getElementsByClassName("gallery--display---photo").item(0).src = targetImage;

    }

    return (
        
        <>
        <Related />

        <section className="product">
            
            <section className="product--container">
                <div className="product--description">
                    <div className="product--description---photo">
                        <div className="product--description---photo----container">
                            <div className="gallery--options"> 

                                <div className="gallery--options---wrapper"> <img height="45" onMouseOver={changeProductDisplay} src={phoneFront}></img> </div>
                                <div className="gallery--options---wrapper"> <img height="45" onMouseOver={changeProductDisplay} src={phoneBack}></img> </div>
                                <div className="gallery--options---wrapper"> <img height="45" onMouseOver={changeProductDisplay} src={phoneSide}></img> </div>

                            </div>
                            
                            <img height="500" width="235"  src={phoneFront} className="gallery--display---photo"></img>
                                
                            
                        </div>
                        
                    </div>

                    <div className="product--description---text----container">
                        <div className="product--description---text">
                            <ul className="description">
                                <li className="description--item">
                                    <div className="description--subtitle"> <span>Nuevo | +1000 vendidos</span> <img className="subtitle--heart" onClick={changeFavourite} src={heartFilled}></img></div>

                                    <h2 className="description--title">TCL 30 SE 128 GB space gray 4 GB RAM</h2>
                                </li>
                                <li className="description--item rating"><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalf /> (442)</li>
                                <li className="description--item price">
                                    <s className="item--price---before">
                                        <span>$</span>
                                        <span>48.999</span>
                                    </s>
                                    <div className="item--price---current">
                                        <span>$</span>
                                        <span>42.999</span>
                                    
                                        <span className="price--current---discount">
                                            10% OFF
                                        </span>
                                    </div>
                                    <div>
                                        <span>en 6x $10.878</span>
                                    </div>

                                    <div>
                                        <a className="description--item---payment"> <p>Ver los medios de pago</p> </a>
                                    </div>

                                    

                                </li>


                                <li className="description--item">
                                    <p className="description--item---title">Lo que tenés que saber de este producto</p>
                                    <ul className="product--description---list">
                                        <li className="description--item---enum"> Dispositivo liberado </li>
                                        <li className="description--item---enum"> Pantalla IPS </li>
                                        <li className="description--item---enum"> Tiene 3 cámaras traseras de 50Mpx/2Mpx/2Mpx. </li>
                                        <li className="description--item---enum"> Cámara delantera de 8Mpx </li>
                                        <li className="description--item---enum"> Procesador MediaTek MT6762V/CB Helio G25 Octa-Core de 2GHz con 4GB de RAM. </li>
                                        <li className="description--item---enum"> Batería de 5000mAh. </li>
                                        <li className="description--item---enum"> Memoria interna de 128GB. </li>
                                        <li className="description--item---enum"> Con reconocimiento facial y sensor de huella dactilar. </li>
                                    </ul>
                                </li>
                            </ul>
                            
                        </div>
                    </div>

                    
                
                </div>
                
                { /* Seccion para características del producto */ }
                
                <div className="product--characteristic---display">
                    <div className="product--characteristic---title" >
                        <p>Características de TCL 30 SE</p>
                    </div>
                    
                    <div className="product--char---content----wrapper">

                        <div className="product--characteristic---content display">
                            
                            <div className="display--size">

                                <RiSmartphoneLine className="display--size---icon" />
                                    
                                <div className="display--size---description">
                                    <p>Tamaño de la pantalla: 6.52 "</p>
                                    <p>(165.2 mm x 75.5 mm x 8.9 mm)</p>

                                    <div style={{display: "flex", flexDirection: "row", flexWrap: "nowrap", justifyContent: "space-betweeen", width: "100%"}}>
                                        <div className="display--size---rating"><span className="display--size---rating----text">PEQUEÑO</span> </div>
                                        <div className="display--size---rating"> </div>
                                        <div className="display--size---rating"> </div>
                                        <div className="display--size---rating"> </div>
                                        <div className="display--size---rating"><span className="display--size---rating----text">GRANDE</span> </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        
                        <div className="product--characteristic---content">
                            <CgSmartphoneChip className="display--size---icon" /> <span className="characteristic--key">Memoria interna: </span> <span className="characteristic--value">128 GB</span>
                        </div>
                        
                        <div className="product--characteristic---content">
                            <SlScreenSmartphone className="display--size---icon" />    <span className="characteristic--key">Cámara trasera principal: </span> <span className="characteristic--value">50 Mpx</span>
                        </div>

                        <div className="product--characteristic---content">
                            <RiSmartphoneLine className="display--size---icon" /> <span className="characteristic--key">Cámara frontal principal: </span> <span className="characteristic--value">8 Mpx</span>
                        </div>

                        <div className="product--characteristic---content">
                            <IoFingerPrint className="display--size---icon" /> 
                            <div>
                                <span className="characteristic--key">Desbloqueo:</span> 
                                <span className="characteristic--value">Huella dactilar y reconocimiento facial</span>
                            </div>

                        </div>

                        <a className="product--characteristic---ref">Ver más características</a>    

                    </div>

                    <section className="description--foot">
                        <p className="description--foot---title">Descripción</p>

                        <span>

                            <p className="description--foot---subtitle">Fotografía profesional en tu bolsillo</p>
                            <p>Descubrí infinitas posibilidades para tus fotos con las 3 cámaras principales de tu equipo. Poné a prueba tu creatividad y jugá con la iluminación, diferentes planos y efectos para obtener grandes resultados.</p>

                            <p>Además, el dispositivo cuenta con cámara frontal de 8 Mpx para que puedas sacarte divertidas selfies o hacer videollamadas.</p>

                            <p className="description--foot---subtitle">Mayor rendimiento</p>
                            <p>Su memoria RAM de 4 GB permite que tu smartphone funcione de manera fluida y sin demoras al realizar distintas tareas, jugar o navegar.</p>

                            <p className="description--foot---subtitle">Desbloqueo facial y dactilar</p>
                            <p>Máxima seguridad para que solo vos puedas acceder al equipo. Podrás elegir entre el sensor de huella dactilar para habilitar el teléfono en un toque, o el reconocimiento facial que permite un desbloqueo hasta un 30% más rápido.</p>

                            <p className="description--foot---subtitle">Batería de duración superior</p>
                            <p>¡Desenchufate! Con la súper batería de 5000 mAh tendrás energía por mucho más tiempo para jugar, ver series o trabajar sin necesidad de realizar recargas.</p>

                        </span>
                    </section>                
                </div>

            </section>

            <div className="product--buy---container">
                <div></div>
                <div className="product--buy---container----sticky">
                    <form className="product--buy">
                        
                        <EnvioInfo />

                    </form>

                    <div className="product--buy">
                        <SellerInfo />

                    </div>

                    <div className="product--buy">
                        <div className="product--form---container">
                            <div className="payment--methods">
                                <div className="payment--methods---title">Medios de pago</div>
                                <div className="payment--methods---content">
                                    <p>Hasta 12 cuotas sin tarjeta</p> 
                                    <ul className="payment--methods---list">
                                        <li><img src={mercadoCredito}></img></li>
                                    </ul>
                                    
                                </div>
                                <div className="payment--methods---content">
                                    <p>Tarjetas de crédito</p>
                                    <ul className="payment--methods---list">
                                        <li><img src={visaCredito}></img></li>
                                        <li><img src={americanExpress}></img></li>
                                        <li><img src={naranjaCredito}></img></li>
                                        <li><img src={mastercardCredito}></img></li>
                                    </ul>
                                </div>
                                <div className="payment--methods---content">
                                    <p>Tarjetas de débito</p>
                                    <ul className="payment--methods---list">
                                        <li><img src={visaDebito}></img></li>
                                        <li><img src={maestroDebito}></img></li>
                                        <li><img src={mastercardDebito}></img></li>
                                        <li><img src={cabalDebito}></img></li>
                                    </ul>
                                </div>
                                <div className="payment--methods---content">
                                    <p>Efectivo</p>
                                    <ul className="payment--methods---list">
                                        <li><img src={pagofacilEfectivo}></img></li>
                                        <li><img src={rapipagoEfectivo}></img></li>
                                    </ul>
                                </div>
                                <div className="payment--methods---content"><a className="payment--methods---knowmore">Conocé otros medios de pago</a></div>
                            
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>

            <div></div>
        </section>
        </>

    );

}