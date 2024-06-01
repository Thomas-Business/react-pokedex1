import { Link } from "react-router-dom";
import CSS from './Header.module.css';

import { ROUTES } from "../../routes/Routes";

import pokeballIcon from "../../assets/icons/pokeball.png";
import pokedexIcon from "../../assets/icons/pokedex.png";

export function Header(){
    return(
        <nav className={CSS.Container}>
            <Link to={ROUTES.index} className={CSS.images}>
                <img src={pokeballIcon} />
                <img src={pokedexIcon} />
            </Link>
        </nav>
    )
}