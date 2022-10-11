import React from "react";
import Film from "./Film";

const FilmList = ({films}) => {

    const filmNodes = films.map((film) => {
        return (
            <Film title={film.title} key={film.id} url={film.url}></Film>
        );
    });

    return (
        <>
        <h1 class="title">List of Films:</h1>
        <p class="list" >{filmNodes}</p>
        </>
    );
};

export default FilmList;