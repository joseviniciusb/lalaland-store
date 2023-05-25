import { DarkText, ExploreText, FlexContainer, MainTitle, SideBarList, WhiteText } from "./TailwindComponents";

const SideBar = () => {
    return (
        <>
            <div className="flex flex-col">
                <ExploreText></ExploreText>
                <SideBarList>

                    <li>Categorias</li>
                    <li>Melhores ofertas</li>
                    <li>Pedidos</li>
                </SideBarList>

            </div>

        </>

    )
}

export default SideBar;