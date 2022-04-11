import {
    Container, 
    MenuItem,
    Following, 
    FollowingHeader,
    InfoContainer,
    SuggestionsAccounts,
    Discover,
    Tags,
    Links
} from "./style";

import User from '../User';

function Sidebar(){
    return(
    <Container>
        <MenuItem active>
            <img src="/image/homeIcon.svg" />
            <span>Para Tu</span>
        </MenuItem>

        <MenuItem>
            <img src="/image/peopleIcon.svg"></img>
            <span>Seguindo</span>
        </MenuItem>
        <MenuItem>
            <img src="/image/camera-de-video.svg"></img>
            <span>Live</span>
        </MenuItem>

        <SuggestionsAccounts>
            <FollowingHeader>Contas sugeridas</FollowingHeader>
            <User user={{
                username:"willsmith",
                name:'Will Smith',
                imagem:"/image/will-login.svg"

            }}></User>
            <User user={{
                username:"luizasonza",
                name:'Luiza Sonza',
                imagem:"/image/luisa-login.svg"

            }}></User>

            <User user={{
                username:"alok",
                name:'alok',
                imagem:"/image/alok-login.svg"

            }}></User>
        </SuggestionsAccounts>

        <Following>
            <FollowingHeader>Contas que você segue</FollowingHeader>
            <User user={{
                username:"zezedicamargo",
                name:'Zezé di Camargo',
                imagem:"/image/zeze-login.svg"
            }}></User>

            <User user={{
                username:"sofiaespanha",
                name:'Sofia Espanha',
                imagem:"/image/sofia-login.svg"
            }}></User>

            <User user={{
                username:"eupereiraoficial",
                name:'Eu Pereira',
                imagem:"/image/eupereira-login.svg"
            }}></User>

            <User user={{
                username:"manualdoaristeu",
                name:'Manual do Aristeu ',
                imagem:"/image/aristeu-login.svg"
            }}></User>

            <User user={{
                username:"vocesabiavideo",
                name:'Você Sabia?',
                imagem:"/image/vocesabia.svg"
            }}></User>
        </Following>

        <Discover>
        <FollowingHeader>Descobrir</FollowingHeader>
            <Tags> <span>#</span>libertadores</Tags>
            <Tags> <span>#</span>bbb22</Tags>
            <Tags> <span>#</span>Envolver - Anitta</Tags>
            <Tags> <span>#</span>lampions</Tags>
            <Tags> <span>#</span>Amiga - Lara Silva</Tags>
            <Tags> <span>#</span>libertadores</Tags>
        </Discover>

        <InfoContainer>
            <Links margin>
                <a>Início</a>
                <a>Sobre</a>
                <a>Sala de imprensa</a>
                <a>Carreira</a>
                <a>ByteDance</a>
            </Links>
                <a>Ajuda</a>
                <br />
                <a>Segurança</a>
            <Links>
                <a>Diretrizes da comunidade</a>
                <a>Termos</a>
            </Links>

            <Links margin>
                <a>Privacidade</a>
            </Links>

            <Links margin>
                <a>© 2022 TikoTeko </a>
            </Links>
        </InfoContainer>
    </Container>
    );
}

export default Sidebar;