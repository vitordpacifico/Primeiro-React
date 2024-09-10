import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx'
import MovieDetails from './pages/MovieDetailPage.jsx'
import Movie from './pages/MovieListPage.jsx'
import ListGender from './pages/GenreListPage.jsx'
import MovieGender from './pages/MoviesByGenrePage.jsx'
import PageNotFound from './pages/PageNotFound.jsx'

const router = createBrowserRouter([
  { 
  path: "/", 
  element: <App/>, 
  children: [
    { element: <Home/>, index: true }, 
    { path: "/filmes/:id", element: <MovieDetails/>},
    { path: "/filmes", element: <Movie /> },
    { path: "/generos", element: <ListGender /> },
    { path: "/generos/:id", element: <MovieGender /> },
    { path: "*", element: <PageNotFound/>}
  ] }
]);


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
