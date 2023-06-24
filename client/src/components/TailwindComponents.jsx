export const Background = ({ children }) => <div className="bg-dark bg-cover h-screen" >{children}</div>
export const BigText = ({ children }) => <p className="text-2xl font-bold text-amber-400">{children}</p>
export const MainTitle = ({ children }) => <h1 className="font-mono italic text-2xl font-bold underline text-white">{children}</h1>
export const WhiteText = ({ children }) => <p className="text-2xl text-white ">{children}</p>
export const FlexContainer = ({ children }) => <div className="flex">{children}</div>
export const HeaderContainer = ({ children }) => <div className="flex p-5 space-x-32">{children}</div>
export const IconsContainer = ({ children }) => <div className="flex space-x-3 items-center">{children}</div>
export const VerticalLine = ({ children }) => <div
    className="flex items-center h-[25px] mt-2  w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50">
    {children}
</div>

export const SideBarList = ({ children }) => <div className="ml-5">
    <ul className="max-w-md space-y-4 text-gray-500 list-none list-inside dark:text-gray-400 ">
        {children}
    </ul>
</div>

export const SidebarTitle = ({ children }) => <span class="font-extrabold italic text-transparent bg-clip-text bg-gradient-to-r from-white from-60%  to-gray-500 to-95% text-xl">
{children}
</span>

export const ProfileIcon = ({ children }) => <img class="w-6 h-6 p-1 rounded-full ring-1 ring-gray-300 dark:ring-gray-500" src="" alt="Bordered avatar">{children}</img>


export const NotifyIcon = ({ children }) =>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0">{children} </path>
    </svg>

export const HeartIcon = ({ children }) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" >{children} </path>
</svg>

export const ShoppingBag = ({ children }) => <div className="flex">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            {children}
        </path>
    </svg>
    <span className="h-4 w-3 inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">0</span>
</div>

export const ProductCard = ({ children }) => <article class="w-60 rounded-md p-2 shadow grid gap-y-2 bg-gray-800">
    <h2 class="text-lg font-bold text-white">Bota</h2>
    <figure class="max-w-lg">
        <img class="h-auto max-w-full rounded-lg" src="https://io.convertiez.com.br/m/sandromoscoloni/shop/products/images/3067/medium/bota-worker-masculina-sandro-moscoloni-worker-amarela_21627.jpg" alt="image description" />
        <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">Especificações do produto</figcaption>
    </figure>
    <p class="text-white">Lorem Ypmsun</p>
    <button class="rounded p-2 bg-yellow-500 justify-self-center">Visualizar</button>
</article>

export const BigProductCard = ({ children }) => <article class="w-3/4 h-96 rounded-md p-2 shadow grid gap-y-2 bg-gray-800">
    <div class="flex">
        <figure class="max-w-xs">
            <img class="h-auto max-w-full rounded-lg" src="https://png.pngtree.com/element_our/png_detail/20180828/white-t-shirt-mockup-png_72953.jpg" alt="image description" />
            <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">Especificações do produto</figcaption>
        </figure>
        <div className="flex max-h-10">
            <hr class="w-12 h-1 ml-8 bg-cyan-500 border-0 rounded md:my-10 dark:bg-gray-700" />
            <p class="text-gray-600 ml-1 mt-6">Ofertas especiais</p>
        </div>

    </div>

</article>








