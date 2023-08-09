import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Background } from "./components/TailwindComponents";
import SideBar from "./components/SideBar";
import BigOfferCard from "./components/Offers/BigOfferCard";
import LittleOfferCard from "./components/Offers/LittleOfferCard";
import LoadingSpinner from "./components/LoadingSpinner";
import Product from "./components/Product";

function App() {
  const [loading, setLoading] = useState(true);
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch(
      "https://joseviniciusb-glowing-space-acorn-5pjqv77vxw62777g-8080.app.github.dev/api/products"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setLoading(false);
        setProdutos(data);
      })
      .catch((error) => {
        console.error("Erro ao obter produtos:", error);
      });
  }, []);

  return (
    <>
      <Background>
        <Header />

        <div className="flex flex-wrap space-x-40">
          <SideBar />

          <div className="flex h-full w-3/5 space-x-4">
            <BigOfferCard
              offerCategory="Men's T-Shirts"
              offerDiscount="35% OFF"
              smallOfferText="Special Offers"
            />
            <LittleOfferCard />
          </div>

        </div>

        <div className="flex justify-center">
          {loading ? (
            <LoadingSpinner />
          ) : (
            produtos.map((product) => {
              return (
                <Product
                  marca={product.marca}
                  especificacoes={product.especificacoes}
                  preco={product.preco}
                />
              );
            })
          )}
        </div>
      </Background>
    </>
  );
}

export default App;
