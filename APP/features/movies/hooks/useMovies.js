import { useEffect, useState } from "react";
import {getMovies} from "../services/movieService"

export const useMovies = () =>{
    const [movies, setMovies] = useState([]);
    const [loading, setloading] = useState(true);


    const fetchMovies = async () => {
        try{
            const data = await getMovies();
            setMovies(data)
        }catch(error){
            console.log("Erro ao buscar filme:", error);
        }finally{
            setloading(false);
        }
    }

    useEffect(() =>{
        fetchMovies();
    },[]);

    return{
        movies,
        loading,
        refresh: fetchMovies,
    }
};