import {
    Container, 
    Content,
    LogoContainer,
    LogoIcon,
    Logo,
    OptionsContainer,
    Icon,
    SearchBox,
    InputSearchBox,
    Avatar
    } from "./style";


function Header(){
    return (
        <Container>
            <Content>
                <LogoContainer>
                    <LogoIcon src='/image/fake tt.svg'></LogoIcon>
                    <Logo src='/image/letras.svg'></Logo>
                </LogoContainer>
                
                <SearchBox>
                    <InputSearchBox>Pesquisar contas e vídeos</InputSearchBox>
                </SearchBox>

                <OptionsContainer>
                    <Icon src="/image/upload-na-nuvem.svg"></Icon>
                    <Icon src="/image/aviao-de-papel.svg"></Icon>
                    <Icon src="/image/comentario-alt.svg"></Icon>
                    <Avatar>
                        <img src='/image/login.svg' />
                    </Avatar>
                </OptionsContainer>

            </Content>
        </Container>
    )
}

export default Header;