const Product = ({marca, especificacoes, preco}) => {
    return (
        <article class="w-[12rem] mt-3 ml-3 rounded-md p-2 shadow grid gap-y-2 bg-gray-800">
        <figure class="max-w-lg">
          <img class="h-auto max-w-full rounded-lg" src="./assets/images/bota.png" alt="Bota" />
          <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
            <h1>{marca}</h1>
            <h2>{especificacoes}</h2>
            <span>{` R$ ${preco}`}</span>
          </figcaption>
        </figure>
      </article>
    )
  
}

export default Product;