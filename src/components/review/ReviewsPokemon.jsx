import CSS from "./ReviewsPokemon.module.css";

export function ReviewsPokemon({review}){
    return(
        <div className={CSS.review}>
            <p className={CSS.text}>{review.content}</p>
            <h5 className={CSS.author}>Posted by : {review.author}</h5>
        </div>
    )
}