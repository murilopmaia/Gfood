//css
import "./Page_Not.css"

import {Link} from 'react-router-dom'

function Page_Not(){
    return(
        <div className="Corpo_page_not">
            <h1>Em Breve</h1>
            <Link to='/' ><img width="30%" src="https://cdn-icons-png.flaticon.com/512/25/25694.png" alt="Home" /></Link>
            
        </div>
    )
}

export default Page_Not;