import { Link } from "react-router-dom"

export default function Contato() {
    return(
        <div>
            <h1>Página de Contatos</h1>
            <Link to="/" >Home</Link><br/>
            <Link to="/sobre" >Sobre</Link>
        </div>
    )
}