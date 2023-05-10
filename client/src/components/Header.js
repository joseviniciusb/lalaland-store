import SearchBar from "./SearchBar";
import { Background, BigText, FlexContainer, WhiteText } from "./TailwindComponents";

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
                </FlexContainer>

            </Background>

        </>

    )
}

export default Header;