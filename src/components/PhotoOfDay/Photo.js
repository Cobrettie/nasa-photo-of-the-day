import React from "react";

function Photo(props) {
    // console.log props at the top of components to see what is going on "behind the scenes"
    console.log(props);
    return (
        <div>
            <h2>{props.title}</h2>
            <img alt="from space!" src={props.url} />
            <p>{props.date}</p>
            <p>{props.explanation}</p>
        </div>
    );
}

export default Photo;

// getting from the api = title, image, explanation, possibly date