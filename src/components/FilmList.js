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
        <p>I'm a film list.</p>
        {filmNodes}
        </>
    );
};

export default FilmList;