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
                        <div
                            className="flex items-center h-[25px]  w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50">
                        </div>

                        <img class="w-6 h-6 p-1 rounded-full ring-1 ring-gray-300 dark:ring-gray-500" src="" alt="Bordered avatar" />

                    </IconsContainer>


                </HeaderContainer>
            </Background>
        </>

    )
}

export default Header;