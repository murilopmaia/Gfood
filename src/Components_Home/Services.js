import {useRef,forwardRef} from 'react'

//css
import "./Services.css"

function Services({},ScrollService){
    return(
        <div className="Services_corpo">
            <div className="Services_titulo">
                <p ref={ScrollService}>Services</p>
                <h3>Why Choose Our Favorite Food</h3>
            </div>

            <div className="Services_services">
                <div className="Services_extremidade">
                    <img src="Garfo_faca.png" alt="Qualidade" />
                    <h4>Qualityfull Food</h4>
                    <p>But I must explain to you how all this
                    mistaken idea of denouncing pleasur and
                    prasising pain was bron.</p>
                </div>

                <div className="Services_meio">
                    <img src="Colher_Garfo.png" alt="Saude" />
                    <h4>Healthy Food</h4>
                    <p>But I must explain to you how all this
                    mistaken idea of denouncing pleasur and
                    prasising pain was bron.</p>
                </div>

                <div className="Services_extremidade">
                    <img src="Transporte.png" alt="Transporte" />
                    <h4>Healthy Food</h4>
                    <p>But I must explain to you how all this
                    mistaken idea of denouncing pleasur and
                    prasising pain was bron.</p>
                </div>
            </div>
            
        </div>
    )
}

export default forwardRef(Services);