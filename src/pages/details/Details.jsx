import { useParams } from "react-router-dom";
import { Header } from "../../components/header/Header";
import { useState, useEffect } from "react";
import { API } from "../../api/api";
import { api } from "../../const/api";
import { Type } from "../../components/type/Type";
import { Stats } from "../../components/stats/Stats";

import CSS from "./Details.module.css";

import likeIcon from "../../assets/icons/like.png";
import bgImage from "../../assets/background/pokeball_bg.svg";
import { ReviewsPokemon } from "../../components/review/ReviewsPokemon";

export function Details() {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState({});
    const [reviews, setReviews] = useState([]);
    const [reviewMessage, setreviewMessage] = useState("");

    async function run() {
        try {
            const data = await API.GetPokemonById(id);
            setPokemon(data);
        } catch (error) {
            console.error("Error fetching Pokémon details:", error);
        }
    }

    useEffect(() => {
        run();
    }, [id]);

    function AddReview(e) {
        e.preventDefault();

        let allReviews = [...reviews];
        let newReview = {
            id: Math.random(),
            pokemonId: id,
            author: "Me",
            content: reviewMessage,
        };

        allReviews.push(newReview);
        setReviews(allReviews);
    }

    return (
        <div>
            <Header />
            <main className={CSS.main} style={{ backgroundImage: `url(${bgImage})` }}>
                <div className={CSS.imgContainer}>
                    <img className={CSS.image} src={`${api.IMAGE_URL}/${pokemon.id}.svg`} alt={`image : ${pokemon.name}`} loading="lazy" />
                </div>
                <div className={CSS.contentContainer}>
                    <h1 className={CSS.titreNom}>{pokemon.name}</h1>
                    <div className={CSS.types}>
                        {pokemon.types && pokemon.types.map((el, i) => (
                            <Type key={i} type={el} />
                        ))}
                    </div>
                    {pokemon.base && (
                        <Stats
                            infos={pokemon.base}
                        />
                    )}

                    <div className={CSS.likes}>
                        <img src={likeIcon} alt="like button" />
                    </div>
                </div>
                <div className={CSS.reviewContainer}>
                    <h1 className={CSS.titreReview}>Reviews</h1>
                    <form onSubmit={AddReview} >
                        <input
                            type="text"
                            value={reviewMessage}
                            onChange={(e) => setreviewMessage(e.target.value)}
                        />
                    </form>
                    <div>
                        {reviews && reviews.map((element) => (
                            <ReviewsPokemon key={element.id} review={element} />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}