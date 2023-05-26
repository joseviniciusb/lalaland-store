import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Background, FlexContainer, ProductCard } from "./components/TailwindComponents";
import SideBar from "./components/SideBar";

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
        <div className="flex space-x-40">
          <SideBar />

          <ProductCard />


        </div>

      </Background>

    </>

  );
}

export default App;
