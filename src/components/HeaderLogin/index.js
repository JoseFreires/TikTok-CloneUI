import {
    Container, 
    LogoContainer,
    LogoIcon,
    Logo,
    Option
    } from "./style";


function HeaderLogin(){
    return (
        <Container>
            <LogoContainer>
                <LogoIcon src='/image/fake tt.svg'></LogoIcon>
                <Logo src='/image/letras.svg'></Logo>
            </LogoContainer>       
            <Option> ? Feedback e ajuda</Option>       
        </Container>
    )
}

export default HeaderLogin;