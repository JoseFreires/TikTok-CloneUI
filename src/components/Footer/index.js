import { Container, Bottom, Button } from  './style';


function Footer (){
    return(
        <>
        <Container>
            <p>Não tem uma conta? 
                <span> Criar conta</span>
            </p>
            <Bottom>
                <Button>
                    Português (Brasil)
                </Button>
                <p>© 2022 TikoTeko</p>
            </Bottom> 
        </Container>
        </>
    )
}

export default Footer;