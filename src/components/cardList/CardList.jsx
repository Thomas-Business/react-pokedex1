import CSS from "./CardList.module.css";
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/Routes';
import { api } from "../../const/api";
import { Type } from "../type/Type";

export function CardList({ pokemons }){

    return (
        <div>
            <div className={CSS.list}>
                {pokemons && pokemons.map((pokemon, index) => (
                    <div key={index}>
                        <Link to={ROUTES.details + "/" + pokemon.id} className={CSS.card}>
                            <img className={CSS.img} src={api.IMAGE_URL + pokemon.id + ".svg"} />
                            <h4 className={CSS.name}>{pokemon.id} {pokemon.name}</h4>
                            <div className={CSS.type}>
                                {pokemon.types.map((type, i) => (
                                    <Type key={i} type={type} />
                                ))}
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}