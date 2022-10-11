import React from "react";

const Film = ({url, title}) => {
    return (
        <>
        <h1 class="link"><a href={url} target="blank">{title}</a></h1>
        </>
    );
};

export default Film;