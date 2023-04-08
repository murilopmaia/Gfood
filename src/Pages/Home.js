import { useRef,useState } from "react";


//Components
import Topo from "../Components_Home/Topo"
import Infos from "../Components_Home/Infos";
import Menu from "../Components_Home/Menu";
import Services from "../Components_Home/Services";
import How_to_work from "../Components_Home/How_to_work";
import Clientes from "../Components_Home/Clients";
import NewsLetter from "../Components_Home/NewsLetter";
import ComFooter from "../Components_Home/ComFooter";
import NavBar from "../Components_Home/NavBar";

//CSS
import "./Home.css"


function Home(){

    const ScrollHome = useRef(null);
    const ScrollMenu = useRef(null);
    const ScrollService = useRef(null);
    const [Qtd,setQtd] = useState(0);

    function Qtd_itens(){
        setQtd((prevQtd)=>prevQtd+1);
    }

    function Handle_ScrollHome(){
        ScrollHome.current?.scrollIntoView({behavior : 'smooth'})
    }

    function Handle_ScrollMenu(){
        ScrollMenu.current?.scrollIntoView({behavior : 'smooth'})
    }

    function Handle_ScrollService(){
        ScrollService.current?.scrollIntoView({behavior : 'smooth'})
    }

    return(
        <div className="Corpo_home">
            <div ref={ScrollHome}></div>
                <div className="Max">
                    <NavBar Handle_ScrollHome={Handle_ScrollHome} Handle_ScrollMenu={Handle_ScrollMenu} Handle_ScrollService={Handle_ScrollService} Qtd={Qtd} Qtd_itens={Qtd_itens}/>
                    <Topo/>
                    <Infos/>
                    <Menu ref={ScrollMenu} Qtd_itens={Qtd_itens}/>
                    <Services ref={ScrollService}/>
                    <How_to_work/>
                    <Clientes/>
                    <NewsLetter/>
                </div>
            
            <ComFooter/>
        </div>
    )
}

export default Home;