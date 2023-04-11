//css
import "./Pesquisa_item.css"

function Pesquisa_item({Mostre,Qtd_itens}){
    
    return(
        <div className="Corpo_pesquisa">
            <img width="30%" src={Mostre.imagem} alt={Mostre.nome} />
            <div className="Descri">
                <h5>{Mostre.Nome}</h5>
                <h4>${Mostre.Preço}</h4>
            </div>
        
                <button onClick={Qtd_itens}>+</button>
            
            
        </div>
    )
}

export default Pesquisa_item