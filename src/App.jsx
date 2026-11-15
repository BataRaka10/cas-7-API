import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import axios from "axios";
import Movies from "./Components/Movies";
import MovieCard from "./Templates/MovieCard";
import Movies2 from "./Components/Movies2";

const API_KEY = "b676ab91";

// * primer api poziva
// * https://www.omdbapi.com/?t=Terminator&apikey=b676ab91

// https://www.omdbapi.com/?t=Terminator&apikey=b676ab91

// process -> nas trenutni server koji je ukljucen
// .env -> odnosi se na fajl = VITE - i iz njega izvuci: VITE_OMDBAPI_KEY
// REACT_APP_OMDBAPI_KEY -> izvuci iz njega REACT_APP_OMDBAPI_KEY

// RESENJE: UMESTO REACT IDE VITE
// const apiKey = import.meta.env.VITE_OMDBAPI_KEY;
const apiKey = import.meta.env.VITE_OMDBAPI_KEY
// const apiUrl = import.meta.env.VITE_OMDBAPI_URL;
const apiUrl = import.meta.env.VITE_OMDBAPI_URL

console.log(apiKey);
console.log(apiUrl);

// * sa fetch -> mi pozivamo api

// ** GET METODA kada imamo ovako vidljive (expose)?t=Terminator&apikey=b676ab91

fetch("https://www.omdbapi.com/?t=Terminator&apikey=b676ab91")
	// hvatamo response ili ti odgovor koji dobija nazad -> u prvovim than console.log(response) ->  dobijamo ugrubo podatke !
	// .then(response => console.log(response))
	
	// * u prvom then -> mi poretvoramo taj odgovor koji smo mi dobili u JSON
	.then(response => response.json()) // da poretvorimo odgovor u JSON

	// mi sa drugim tham samo ispisujemo odgovor (te podatke) JSON
	.then(jsonResponse => console.log(jsonResponse))


// fetch("https://www.omdbapi.com/?t=Terminator&apikey=b676ab91")
	// hvatamo response ili ti odgovor koji dobija nazad -> u prvovim than console.log(response) ->  dobijamo ugrubo podatke !
	// * u prvom than -> mi poretvoramo taj odgovor koji smo mi dobili u JSON
	// .then(response => response.json()) // da poretvorimo odgovor u JSON

	// mi sa drugim tham samo ispisujemo odgovor (te podatke) JSON
	// .then(jasonResponse => console.log(jasonResponse))


// * domaci: fetch da ide preko axiosa

axios.get("https://www.omdbapi.com/?t=Terminator&apikey=b676ab91")
	// 
	.then(response => console.log(response.data))
	.catch(error => console.log(error))


// axios.get("https://www.omdbapi.com/?t=Terminator&apikey=b676ab91")
	// response.data - podatci
	// .then(response => console.log(response.data))
	// .catch(error => console.log(error))


// ** Domaci: da ovaj poziv preko fetch -> pretvorimo da ide preko axios

axios.get(import.meta.env.VITE_OMDBAPI_URL+"?t=Terminator&apikey="+import.meta.env.VITE_OMDBAPI_KEY)

console.log(import.meta.env.VITE_OMDBAPI_URL+"?t=Terminator&apikey="+import.meta.env.VITE_OMDBAPI_KEY)

// axios.get(import.meta.env.VITE_OMDBAPI_URL+"?t=Terminator&apikey="+import.meta.env.VITE_OMDBAPI_KEY)
	// sve podatke sa response.data
	// .then(response => console.log(response.data))
	// .catch(error => console.log(error))


// parametar za get jeste url: https://www.omdbapi.com/?t=Terminator&apikey=b676ab91"

// axios.get("https://www.omdbapi.com/?t=Terminator&apikey=b676ab91")
// 	.then(response => console.log(response.data))
// 	.catch(error => console.log(error))

// * moramo da importujemo axios 


// * vezba: imamo stavari u .emv i url i api key "https://www.omdbapi.com/?t=Terminator&apikey" -> da promenimo da ne poziva ovako https://www.omdbapi.com/? axios -> vec da iz .env povlaci te podatke, ne smemo da imamo nigde kljuc od apija vec koristeci .env izvucemo ove podatke https://www.omdbapi.com/ /// u axios pozivo treba da promenimo sve iz .env https://www.omdbapi.com/?t=Terminator&apikey=7b676ab91

axios.get(import.meta.env.VITE_OMDBAPI_URL+"?t=Terminator&apikey="+import.meta.env.VITE_OMDBAPI_KEY)

console.log(import.meta.env.VITE_OMDBAPI_URL+"?t=Terminator&apikey="+import.meta.env.VITE_OMDBAPI_KEY)


// axios.get("https://www.omdbapi.com/?t=Terminator&apikey=b676ab91")// dodao 7 ispred
	// .then(response => console.log(response.data))

	// hvatanje erora(greske koja se desila)
	// .catch(error => console.log(error))

//resenje:



// * vezba: imamo stavari u .emv i url i api key "https://www.omdbapi.com/?t=Terminator&apikey" -> da promenimo dane poziva ovako https://www.omdbapi.com/? axios -> vec da iz .env povlaci te podatke, ne smemo da imamo nigde kljuc od apija vec koristeci .env izvucemo ove podatke https://www.omdbapi.com/ /// u axios pozivo treba da promenimo sve iz .env https://www.omdbapi.com/?t=Terminator&apikey=7b676ab91

// domaci: forma u koju mogu upisati ime nekog filma

// cek samo sekund
function App() {

	return (
		<>
			<Movies />

			<Movies2 />
		</>
	);
}

export default App;
