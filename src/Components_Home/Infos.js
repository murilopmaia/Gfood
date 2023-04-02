//css
import "./Infos.css"
function Infos(){
    return(
        <div className="Informa">
            <div className="Instru">

                <div>
                     <img src="horario.png" alt="horas" />
                </div>
                
                <h5>Today 10:00am - 10:00pm</h5>
                <p>Working Time</p>
            </div>
            <div className="Linha"></div>
            <div className="Instru">

                <div>
                    <img src="Local.png" alt="locas" />
                </div>
                
                <h5>Washington, D.C., DC,USA</h5>
                <p>Our Location</p>
            </div>
            <div className="Linha"></div>
            <div className="Instru">
                <div>
                    <img src="Telefone.png" alt="Contato" />
                </div>
                
                <h5>+0123 456 7891</h5>
                <p>Phone Number</p>
            </div>
        </div>
    )
}
export default Infos;