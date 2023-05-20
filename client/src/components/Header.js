import SearchBar from "./SearchBar";
import { Background, BigText, FlexContainer, HeaderContainer, HeartIcon, IconsContainer, NotifyIcon, ProfileIcon, ShoppingBag, VerticalLine, WhiteText } from "./TailwindComponents";

const Header = () => {

    return (
        <>


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
                    <VerticalLine />
                    <ProfileIcon />

                </IconsContainer>


            </HeaderContainer>

        </>

    )
}

export default Header;