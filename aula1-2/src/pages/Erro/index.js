import { Link } from "react-router-dom"

export default function Erro() {
    return(
        <div>
            <h1>Um... parece que essa pagina não existe</h1>

            <span>Você pode estar procurando por esse menu: </span><br/>
            <Link to="/" >Home</Link><br/>
            <Link to="/contato" >Contatos</Link><br/>
            <Link to="/sobre" >Sobre</Link>
        </div>
    )
}
