import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Background } from "./components/TailwindComponents";
import SideBar from "./components/SideBar";
import BigOfferCard from "./components/Offers/BigOfferCard";
import LittleOfferCard from "./components/Offers/LittleOfferCard";

function App() {
  
const [produtos, setProdutos] = useState([])

  useEffect(() => {
    // Fazendo a chamada da API no método componentDidMount
    fetch('https://joseviniciusb-glowing-space-acorn-5pjqv77vxw62777g-3333.preview.app.github.dev/api/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Falha ao obter produtos.');
        }
        return response.json();
      })
      .then(data => {
        setProdutos(data);
      })
      .catch(error => {
        console.error('Erro ao obter produtos:', error);
      });
  }, []);

  console.log('tesadsadas', produtos);


  return (
    <>
      <Background>
        <Header />

        <div className="flex flex-wrap space-x-40">

          <SideBar />

          <div className="flex h-full w-3/5 space-x-4">
            <BigOfferCard offerCategory="Men's T-Shirts" offerDiscount="35% OFF" smallOfferText="Special Offers" />
            <LittleOfferCard />
          </div>

        </div>
        <div className="flex justify-center">
          {
            produtos.map((product) => {
              return (

                <article class="w-48 m-5 rounded-md p-2 shadow grid gap-y-2 bg-gray-800">
                  <figure class="max-w-lg">
                    <img class="h-auto max-w-full rounded-lg" src="./assets/images/bota.png" alt="Bota" />
                    <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
                      <h1>{product.marca}</h1>
                      <h2>{product.especificacoes}</h2>
                      <span>{` R$ ${product.preco}`}</span>
                    </figcaption>
                  </figure>
                </article>

              )

            })
          }
        </div>


      </Background >

    </>

  );
}

export default App;
