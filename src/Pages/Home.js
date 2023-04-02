//Components
import Topo from "../Components_Home/Topo"
import Infos from "../Components_Home/Infos";

//CSS
import "./Home.css"


function Home(){
    return(
        <div className="Max">
            <Topo/>
            <Infos/>
        </div>
    )
}

export default Home;