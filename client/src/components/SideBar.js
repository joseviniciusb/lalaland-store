import { DarkText, ExploreText, FlexContainer, MainTitle, SideBarList, WhiteText } from "./TailwindComponents";

const SideBar = () => {
    return (
        <>
            <div className="flex flex-col">
                <ExploreText></ExploreText>
                <SideBarList>
                    <li className="hover:underline decoration-yellow-200 cursor-pointer">Categorias</li>
                    <li className="hover:underline decoration-yellow-200 cursor-pointer">Melhores ofertas</li>
                    <li className="hover:underline decoration-yellow-200 cursor-pointer">Pedidos</li>
                </SideBarList>

            </div>

        </>

    )
}

export default SideBar;