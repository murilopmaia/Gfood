import {Link} from 'react-router-dom'

//css
import "./Login.css"

//Imagem
import Fundo_img from '../../assets/Fundo_login.png'
import Imagem_lateral_img from '../../assets/Imagem_lateral.png'
import Logo_img from '../../assets/Logo.png'

function Login(){
    return(
        <div className="Corpo_login">
            <div className="Imagem_login">
                <img width="100%" height="100%" src={Fundo_img} alt="Fundo" />
            </div>
            <div className="Filtro">

            </div>
            <div className="Centro_login">
                <div className="Login">
                    <Link to="/gfood"><img src={Logo_img} alt="LOGO" /></Link>
                     
                     
                         <form>
                            <div className="Cadastro">
                                <label>
                                    <h5>USER NAME</h5>
                                    <input type="text" />
                                </label>
                                <label >
                                    <h5>PASSWORD</h5>
                                    <input type="text" />
                                </label>
                            </div>
                            <div className="Login_Signup">
                                <input type="Submit" value="LOGIN" />
                                <p>Don't have an account?</p>
                            </div>
                            
                         </form>
                     
                     
                </div>
                <div className="Imagem_lateral"> 
                    <img width="100%" height="100%" src={Imagem_lateral_img} alt="Lateral" />
                </div>
            </div>
        </div>
    )
}

export default Login;