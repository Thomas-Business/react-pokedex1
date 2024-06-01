import { useState, useEffect } from "react";

import { CardList } from "../../components/cardList/CardList";
import { API } from "../../api/api";
import { Header } from "../../components/header/Header";

import CSS from "./Home.module.css";

export function Home(){

    const [pokemonList, setPokemonList] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredPokemonList, setFilteredPokemonList] = useState([]);

    async function fetchData(){
        const data = await API.GetPokemons();
        setPokemonList(data);
        setFilteredPokemonList(data); // Initialize with the complete list
    }

    useEffect(() => {
        fetchData();
    }, [])

    useEffect(() => {
        searchPokemons(searchQuery);
    }, [searchQuery, pokemonList]);

    function searchPokemons(query) {
        const filteredData = pokemonList.filter((pokemon) => 
            pokemon.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredPokemonList(filteredData);
    }

    return(
        <div className={CSS.home} >
            <Header />
            <input 
                className={CSS.search} 
                type="text" 
                placeholder="Pikachu..."
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)} 
            />
            <CardList pokemons={filteredPokemonList} />
        </div>
    )
}