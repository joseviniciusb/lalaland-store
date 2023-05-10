import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Background } from "./components/TailwindComponents";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(message);
  return (
    <>
      <Background>
        <Header />
      </Background>

    </>

  );
}

export default App;
