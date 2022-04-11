import { MainContainer,
        User,
        VideoWapper, 
        Titulo,
        Avatar,
        Video,
        ItemContainer,
        Buttons
        } from './style';

function Feed () {
    return(
        <MainContainer>  {/* Local para organizar partes do componente */}
                    <ItemContainer>  {/* Onde fica o Postcard do site */}
                    <Avatar> {/* A imagem do usuário */}
                        <img src= '/image/aristeu-login.svg'/>
                    </Avatar> 
                    <User>  {/* Nome de usuário e nome de comum */}
                        <h4>manualdoaristeu</h4>
                        <p>Manual Aristeu</p>
                    </User>
                    <Titulo>  {/* Título do vídeo */}
                        <h4>mini eu kkk</h4>
                    </Titulo>
                    <VideoWapper>
                        <Video>
                        <img src= '/image/aristeu.svg'/>
                        </Video>
                        <Buttons>
                            <img src="/image/heartIcon.svg"></img>
                            <img src="/image/bubbleIcon.svg"></img>
                            <img src="/image/arrowIcon.svg"></img>
                        </Buttons>
                    </VideoWapper>
                </ItemContainer>

                <ItemContainer>
                    <Avatar>
                        <img src= '/image/sofia-login.svg'/>
                    </Avatar> 
                    <User>
                    
                        <h4>sofiaespanha</h4>
                        <p>Sofia Espanha</p>
                    </User>
                    <Titulo>
                        <h4>dançandokkk</h4>
                    </Titulo>
                    <VideoWapper>
                        <Video>
                            <img src= '/image/sofia.svg'/>
                        </Video>
                        <Buttons>
                            <img src="/image/heartIcon.svg"></img>
                            <img src="/image/bubbleIcon.svg"></img>
                            <img src="/image/arrowIcon.svg"></img>
                        </Buttons>
                    </VideoWapper>
                </ItemContainer> 

                <ItemContainer>
                    <Avatar>
                        <img src= '/image/trigemeas-icon.svg'/>
                    </Avatar> 
                    <User>
                    
                        <h4>coisasdetrigemeasoficial</h4>
                        <p>Coisas De Trigêmeas</p>
                    </User>
                    <Titulo>
                        <h4>nós trêskkk</h4>
                    </Titulo>
                    <VideoWapper>
                        <Video>
                            <img src= '/image/trigemeas.svg'/>
                        </Video>
                        <Buttons>
                            <img src="/image/heartIcon.svg"></img>
                            <img src="/image/bubbleIcon.svg"></img>
                            <img src="/image/arrowIcon.svg"></img>
                        </Buttons>
                    </VideoWapper>
                    
                </ItemContainer>

                <ItemContainer>
                    <Avatar>
                        <img src= '/image/laura-icon.svg'/>
                    </Avatar> 
                    <User>
                    
                        <h4>laura.tsuki</h4>
                        <p>laura </p>
                    </User>
                    <Titulo>
                        <h4>Cosplay Arcane</h4>
                    </Titulo>
                    <VideoWapper>
                        <Video>
                            <img src= '/image/cosplayer.svg'/>
                        </Video>
                        <Buttons>
                            <img src="/image/heartIcon.svg"></img>
                            <img src="/image/bubbleIcon.svg"></img>
                            <img src="/image/arrowIcon.svg"></img>
                        </Buttons>
                    </VideoWapper>
                </ItemContainer>
                <ItemContainer>
                    <Avatar>
                        <img src= '/image/marvel-icon.svg'/>
                    </Avatar> 
                    <User>
                    
                        <h4>marvel</h4>
                        <p>Marvel Entertainment</p>
                    </User>
                    <Titulo>
                        <h4>Trailer Doutor Estranho: No Multiverso da Loucura.</h4>
                    </Titulo>
                    <VideoWapper>
                        <Video>
                            <img src= '/image/dr.estranho.svg'/>
                        </Video>
                        <Buttons>
                            <img src="/image/heartIcon.svg"></img>
                            <img src="/image/bubbleIcon.svg"></img>
                            <img src="/image/arrowIcon.svg"></img>
                        </Buttons>
                    </VideoWapper>
                </ItemContainer>

        </MainContainer>
    );
};

export default Feed;