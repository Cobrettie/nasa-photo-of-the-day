import React, { useState, useEffect } from "react";
import axios from "axios";
import Title from "./components/PhotoOfDay/Title";
import Photo from "./components/PhotoOfDay/Photo";
import Explanation from "./components/PhotoOfDay/Explanation";
import Date from "./components/PhotoOfDay/Date";

import "./App.css";

function App() {
  // using useState hook to allow us to return the title inside of our .then() promise 
  // can leave useState blank, however, to prevent future errors, we are setting the value to be the same data type as what we expect to return. Im setting useState to an empty string, because later on I am changing the title's state to return a string of info. string = data type
  // const [title, setTitle] = useState("");
  
  // useState hook to set the rest of our data that we want to display later on
  // const [explanation, setExplanation] = useState("");
  // const [url, setUrl] = useState("");

  // HOWEVER, we can pull all of this data from the api already, so lets make it so we only need to get the data from a single source
  // setting state to an empty object, since we are expecting to return an object later on
  const [data, setData] = useState({});

  // useEffect hook, allowing code to run SOMETIMES
  // useEffect takes a callback function as its first argument
  // then takes code that we want to delay the execution on,
  // then it takes a second argument as an array of data
  // when any data changes inside of the array since the last time the component was rendered or ran, useEffect is going to run the callback function
  useEffect(() => {
    // implement axios, get data from API
  axios
      .get("https://api.nasa.gov/planetary/apod?api_key=G5NmnWzWPh41tHLHJMzmEBBvb6bhYH6u9lPg4dWK")
      .then(res => {
        // console log allows us to see what is being returned from the response
        console.log(res.data);
        // calling setData is performing a side effect
        setData(res.data);
      });
  }, []);

  return (
    <div className="App">
      {/* giving our Photo component data via props */}
      <Title title={data.title} />
      <Photo
        url={data.url}
      />
      <Date date={data.date} />
      <Explanation explanation={data.explanation} />
    </div>
  );
}

export default App;
