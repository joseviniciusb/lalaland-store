import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Background, BigProductCard, FlexContainer, ProductCard } from "./components/TailwindComponents";
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

        <div className="flex flex-wrap space-x-40">

          <SideBar />

          <div className="flex h-full w-3/5 space-x-4">
            <BigProductCard />
            <ProductCard />
          </div>

        </div>


        <div className="flex justify-center">
          <article class="w-48 m-5 rounded-md p-2 shadow grid gap-y-2 bg-gray-800">
            <figure class="max-w-lg">
              <img class="h-auto max-w-full rounded-lg" src="./assets/images/bota.png" alt="image description" />
              <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">Especificações do produto</figcaption>
            </figure>
          </article>
        </div>

      </Background >

    </>

  );
}

export default App;
