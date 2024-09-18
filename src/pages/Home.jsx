import CardContainer from "../components/CardContainer";
import movies from "../data/movies.json"
import MovieCard from "../components/MovieCard"
export default function Home(){
    console.log(movies)
    return(
        <>    
            <CardContainer titulo="Filmes antigos">
                {movies
                    .filter(movie => movie.ano_lancamento < 2000)
                    .map(movies => (
                        <MovieCard key={movies.id} {...movies}/>
                ))}
            </CardContainer>
        </>
    )
}