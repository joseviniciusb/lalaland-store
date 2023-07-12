const BigProductCard = ({nome, desconto, categoria}) => {
    return (
    
    <article class="h-60 rounded-md p-2 shadow grid gap-y-2 bg-gray-800">
    <div class="flex m-1">
        <figure class="">
            <img style={{transform: "translateY(15px) translateX(-10px) rotate(-15deg)"}} class="h-52 max-w-full rounded-lg" src="/assets/images/jacket.png" alt="Jaqueta preta" />
        </figure>
        <div>

            <div className="flex max-h-10">
                <hr class="w-12 h-1 ml-8 bg-cyan-500 border-0 rounded md:my-10 dark:bg-gray-700" />
                <p class="text-gray-600 ml-1 mt-6">Ofertas especiais</p>
            </div>

            <div>
                <h1 className="ml-5 mt-5 text-2xl font-bold text-slate-50" >{nome}</h1>

                <h1 className="ml-5 mt-5 text-lg text-slate-500">Bests {nome} <span className="text-lg text-slate-50 font-semibold">{desconto}% OFF</span>  On All {categoria}! </h1>

            </div>

        </div>

    </div>


</article >

    )
}

export default BigProductCard;