import SearchBar from "./SearchBar";
import { Background, BigText, FlexContainer, HeartIcon, NotifyIcon, WhiteText } from "./TailwindComponents";

const Header = () => {

    return (
        <>

            <Background>
                <FlexContainer>
                    <div className="flex">
                        <BigText>Lalaland</BigText>
                        <WhiteText>Store</WhiteText>
                    </div>
                    <SearchBar></SearchBar>
                    <div className="flex">
                        <NotifyIcon></NotifyIcon>
                        <HeartIcon></HeartIcon>
                    </div>

                </FlexContainer>

            </Background>

        </>

    )
}

export default Header;