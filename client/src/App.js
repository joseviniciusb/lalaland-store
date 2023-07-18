import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Background } from "./components/TailwindComponents";
import SideBar from "./components/SideBar";
import BigOfferCard from "./components/Offers/BigOfferCard";
import LittleOfferCard from "./components/Offers/LittleOfferCard";

function App() {
  const [message, setMessage] = useState("");

  console.log('criar array de produtos');

  const products = [
    {
      marca: 'Lumiss',
      especificacoes: 'Bota masculina Adventure',
      preco: '120,00'
    },
    {
      marca: 'Nike',
      especificacoes: 'Calças de Moletom Camisa masculina Nsw Club Jogger',
      preco: '300,00'
    },
    {
      marca: 'Oakley',
      especificacoes: 'Jaqueta Windbreaker Unissex',
      preco: '350,00'
    },
    {
      marca: 'Vicbela',
      especificacoes: 'Calça Jogger Feminina',
      preco: '350,00'
    }
  ]

  console.log('produtos', products);

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
            products.map((product) => {
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
