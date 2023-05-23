import { DarkText, ExploreText, FlexContainer, MainTitle, SideBarList, WhiteText } from "./TailwindComponents";

const SideBar = () => {
    return (
        <>

            <ExploreText></ExploreText>
            <SideBarList>
                <li>Categorias</li>
                <li>Melhores ofertas</li>
                <li>Pedidos</li>
            </SideBarList>

        </>

    )
}

export default SideBar;