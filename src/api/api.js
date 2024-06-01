import { api } from '../const/api';

export const API = {
    GetPokemons: async () => {
        const response = await fetch(`${api.URL}/pokemons`);
        const res = await response.json();
        return res;
    },
    GetPokemonById: async (id) => {
        const response = await fetch(`${api.URL}/pokemons/${id}`);
        const res = await response.json();
        return res;
    }
}