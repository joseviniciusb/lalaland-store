import SearchBar from "./SearchBar";
import { Background, BigText, FlexContainer, HeaderContainer, HeartIcon, IconsContainer, NotifyIcon, ShoppingBag, WhiteText } from "./TailwindComponents";

const Header = () => {

    return (
        <>

            <Background>
                <HeaderContainer>

                    <FlexContainer>
                        <BigText>Lalaland</BigText>
                        <WhiteText>Store</WhiteText>
                    </FlexContainer>

                    <SearchBar />

                    <IconsContainer>
                        <NotifyIcon />
                        <HeartIcon />
                        <ShoppingBag />
                    </IconsContainer>



                </HeaderContainer>
            </Background>
        </>

    )
}

export default Header;