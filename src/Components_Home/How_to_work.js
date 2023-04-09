//css
import "./How_to_work.css"

function How_to_work(){
    return(
        <div className="How_corpo">
            <div className="How_titulo">
                <p>How to work</p>
                <h3>Food Us An Important Part Of A Balanced Diet</h3>
            </div>

            <div className="How_infos">
                <div className="How_esquerdo">
                    <img src="Tela_not.png" alt="Tela" />
                    
                    <div className="Nome_bolinha_esquerdo">
                        <h4>CHOOSE</h4>
                        <div className="Bolinha"><p></p></div>
                    </div>
                    <p>Do you want to lose weight, exercise,
                        adhere to a therapeutic diet? Our
                        dietitian will help you with choosing the
                        right program!</p>

                </div>

                <div className="How_meio">
                    
                    
                    <div className="Nome_bolinha_meio">
                        <div className="Bolinha"></div>
                        <h4>PREPARE FOOD</h4>
                        <div className="Bolinha"></div>
                    </div>
                    <p>Do you want to lose weight, exercise,
                    adhere to a therapeutic diet? Our
                    dietitian will help you with choosing the
                    right program!</p>
                    <img src="Food.png" alt="Food" />

                </div>

                <div className="How_direito">
                    <img src="Sacolas.png" alt="Sacolas" />
                    <div className="Nome_bolinha_direito">
                        <div className="Bolinha"></div>
                        <h4>DELIVER</h4>
                    </div>
                    
                    <p>Do you want to lose weight, exercise,
                    adhere to a therapeutic diet? Our
                    dietitian will help you with choosing the
                    right program!</p>

                </div>
            </div>
            
        </div>
    )
}

export default How_to_work