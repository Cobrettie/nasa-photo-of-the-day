import React from "react";

function Title(props) {
    // console.log(props);
    return (
        <div>
            <h1>NASA Photo Of The Day</h1>
            <h2>{props.title}</h2>
        </div>
    );
} 

export default Title;
