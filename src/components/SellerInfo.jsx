import React from "react"

import {GrLocation} from "react-icons/gr"
import {CiMedal, CiStopwatch} from "react-icons/ci"
import {BsChatLeft} from "react-icons/bs"


export default function SellerInfo()
{
    return (
        <>
            <div className="product--form---container">
                <div className="seller--req">
                    <span className="seller--req---title"><p>Información sobre el vendedor</p></span>
                    <div className="seller--req---content"><figure className="seller--req---figure"><GrLocation /></figure> <div className="seller--req---division"> <p className="seller--req---subtitle">Ubicación</p><span className="seller--req---subtitle----descript">Elortondo Santa Fé</span></div> </div>
                    <div className="seller--req---content"><figure className="seller--req---figure"><CiMedal /> </figure> <div className="seller--req---division"> <p className="seller--req---subtitle underline">MercadoLíder Platinum </p><span className="seller--req---subtitle----descript">¡Es uno de los mejores del sitio!</span></div> </div>
                    <div className="seller--req---content"> <div className="seller--req---ratingbox"></div> <div className="seller--req---ratingbox"></div> <div className="seller--req---ratingbox"></div> <div className="seller--req---ratingbox"></div> <div className="seller--req---ratingbox"></div> </div>
                    <div className="seller--req---content"><div className="seller--req---perks"><p className="seller--perks---sells">+10mil</p> <span>ventas en los últimos 60 días</span></div> <div className="seller--req---perks"> <BsChatLeft className="seller--perks---img" /> Brinda buena atencion</div> <div className="seller--req---perks"> <CiStopwatch className="seller--perks---img" /> Despacha sus productos a tiempo</div></div>
                    <div className="seller--req---content"><a className="seller--datalink">Ver más datos de este vendedor</a></div>
                 </div>
            </div>

        </>
    )
}