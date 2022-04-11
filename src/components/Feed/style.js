import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 732px;
    flex: 1 1 auto;
    margin-left: 100px;
    padding: 0px 0px;

    @media and (max-width: 756px){
        max-width: 400px;
    }

`;

export const Video = styled.div`

>img{
    width: 336px ;
    height: 600px;
    border-radius: 15px

    
}
`;

export const ItemContainer = styled.div`

`;

export const User = styled.div`
    display: flex;
    margin-left: 70px;
    margin-top: 0;
    
    >h4{
        margin-top: 0;
        margin-right: 2px;
    }

    >p{
        margin-top: 0;
    }
`;

export const VideoWapper = styled.div`
    display: flex;
    width: 600px;
    height: 620px;
    margin-left: 50px;
    margin-bottom: 50px;
    border-bottom: 0.5px solid rgba(22, 24, 35, 0.12);


    
`;

export const Titulo = styled.div`
    padding: 0;
    margin-left: 75px;
    margin-top: 0;
`;

export const Buttons = styled.div`
    display: flex;
    align-items: center;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: colunm;
    cursor: pointer;
    position: relative;
    padding: 0;
    margin-top: 450px;
    
    >img{
        margin-bottom: 20px;
        margin-left: 5px;
    }

`;

export const Avatar = styled.div`
    flex: 0 0 30px;
    margin-left: 0px;
    position: absolute;
    cursor: pointer;

    >img{
        width: 56px;
        height: 56px;
        display: inline-block;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-feature-settings: 'tnum';
        position: relative;
        overflow: hidden;
        color: #fff;
        white-space: nowrap;
        text-align: center;
        vertical-align: middle;
        line-height: 32px;
        border-radius: 50%

    }

`;