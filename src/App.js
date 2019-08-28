import React, { useState, useEffect } from "react";
import "./App.css";

function App() {

  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    document.title = `You clicked me ${count} times`
  })

  return (
    <div className="App">
      <h1 id="test">Hey</h1>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>

      <p>You clicked me {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>

    </div>
  );
}

export default App;
