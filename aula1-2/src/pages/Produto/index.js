import { useParams } from "react-router"

export default function Produto() {
    const { id } = useParams();
    return(
        <div>
            <h1>Grade de produtos</h1>

            <span>Produto selectionado: {id} </span>
        </div>
    )
}