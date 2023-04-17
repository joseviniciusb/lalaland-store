import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch("/teste")
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      {" "}
      <h1 class="text-2xl font-bold underline">
        {message ? message : "Loading.."}
      </h1>
    </div>
  );
}

export default App;
