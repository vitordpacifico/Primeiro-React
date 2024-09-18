import { NavLink } from "react-router-dom";

export default function Header(){
    return(
        <>
            <header className="flex w-full h-14   bg-purple-600 justify-around items-center text-white">
                <div>
                    <h1>Portal Filmes</h1>
                </div>
                <nav>
                    <ul className="flex gap-5">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/filmes">Filmes</NavLink></li>
                        <li><NavLink to="/generos">Gêneros</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}