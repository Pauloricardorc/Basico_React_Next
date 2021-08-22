import { Link } from "react-router-dom"

export default function Header() {
    return(
        <header>
            <h2>Menu de rotas</h2>
            <Link to="/contato">Contatos</Link>
        </header>
    )
}