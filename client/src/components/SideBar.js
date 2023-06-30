import { DarkText, ExploreText, FlexContainer, MainTitle, SideBarList, SidebarTitle, WhiteText } from "./TailwindComponents";

const SideBar = () => {
    return (
        <>
            <div>
                <SideBarList>
                <SidebarTitle>Explore</SidebarTitle>
                    <li className="hover:underline decoration-yellow-200 cursor-pointer">Categorias</li>
                    <li className="hover:underline decoration-yellow-200 cursor-pointer">Melhores ofertas</li>
                    <li className="hover:underline decoration-yellow-200 cursor-pointer">Pedidos</li>
                </SideBarList>

            </div>

        </>

    )
}

export default SideBar;