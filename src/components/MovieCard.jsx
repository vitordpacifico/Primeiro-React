import { Link } from "react-router-dom"
import movies from "../data/movies.json"

export default function MovieCard({titulo, id, imagem_destaque}) {
    return(
        <>
        <div>
            <h2>{titulo}</h2>
            <img src={ `/${imagem_destaque}`}/>
            <Link to={`movies/${id}`} {...movies}>Saiba mais</Link>
        </div>
        </>
    )

}
