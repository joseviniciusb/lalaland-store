import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Background, FlexContainer } from "./components/TailwindComponents";
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
        <div className="flex space-x-32">
          <SideBar />
          <article class="w-60 rounded-md p-2 shadow grid gap-y-2 bg-gray-800">
            <h2 class="text-lg font-bold text-white">Título do produto</h2>
            <figure class="max-w-lg">
              <img class="h-auto max-w-full rounded-lg" src="https://io.convertiez.com.br/m/sandromoscoloni/shop/products/images/3067/medium/bota-worker-masculina-sandro-moscoloni-worker-amarela_21627.jpg" alt="image description" />
              <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">Especificações do produto</figcaption>
            </figure>
            <p class="text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis excepturi minima doloremque?</p>
            <button class="rounded p-2 bg-yellow-500 justify-self-center">Visualizar</button>
          </article>
        </div>

      </Background>

    </>

  );
}

export default App;
