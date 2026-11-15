import axios from "axios";
import { useState } from "react";



const Movies2 = () => {


    const [movieName, setMovieName] = useState();

    // metoda
    const searchMovieByTitle = () => {
        // console.log("Hello")
        console.log(movieName)

        axios.get(`${import.meta.env.VITE_OMDBAPI_URL}?t=${movieName}&apikey=${import.meta.env.VITE_OMDBAPI_KEY}`)

        // axios.get(import.meta.env.VITE_OMDBAPI_URL+"?t="+movieName+"&apikey="+import.meta.env.VITE_OMDBAPI_KEY)
            .then(response => console.log(response.data))

    }

    return (
        <>
            <form>
                <input type="text" onInput={ (e) => setMovieName(e.currentTarget.value)} />
                <button type="button" onClick={searchMovieByTitle}>Search movie</button>
            </form>
        </>
    )
}

export default Movies2;