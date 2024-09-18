import CardContainer from "../components/CardContainer";
import MovieCard from "../components/MovieCard";
import movies from "../data/movies.json"

export default function Home(){
    console.log(movies)
    return(
        <>
            <CardContainer>
                <h1>Filmes </h1>
                {movies
                .filter(movie => movie.ano_lancamento > 2000)
                .map(movie => (
                    <MovieCard key={movie.id} {...movie}/>))}
            </CardContainer>
        </>
    )
}