import { Container, Imagem, Info } from "./styles";

export default function User({user}){
    return (
        <Container>

            <img src={user.imagem}></img>

            <Info>
                <span>{user.username}</span>
                <a>{user.name}</a>
            </Info>
        </Container>
    )
}