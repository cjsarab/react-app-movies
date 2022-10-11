import React from "react";

const Film = ({url, title}) => {
    return (
        <>
        <h1>
        <a href={url}>{title}</a></h1>
        </>
    );
};

export default Film;