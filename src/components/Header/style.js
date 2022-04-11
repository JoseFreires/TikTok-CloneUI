import styled from 'styled-components';

export const Container = styled.div`
    max-width:100%;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 70px;
    background: #fff;
    border-bottom: 1px solid rgba(34,90,98,0.2);
    justify-content: space-between;
    z-index: 1000;
`;

export const SearchBox = styled.div` 
    min-width: 300px;
    height: 35px;
    border-radius: 30px;
    background-color: rgba(22, 24, 35, 0.06);
    padding: 5px;
    justufy-content: center;
    text-align: left;
    font-size: 18px;

    border-rigth: 1px solid rgba(0, 225, 0);

    @media screen and (max-width: 768px) {
        display: none;   
      }
`;


export const InputSearchBox = styled.div`
      margin-left: 10px;
`;

export const Content = styled.div`
    display: flex;
    height: 100%;
    width: 50%;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

    @media screen and (max-width: 768px) {
        width: 100%; 
        margin-left: 0px;
      }
   

`;

export const LogoContainer = styled.div`
    display: flex;
    margin-right: 100px
`;

export const LogoIcon = styled.img`
    width: 30px;
    margin-left: 10px
    
`;

export const Logo = styled.img`
    width: 170px;
    position: relative;
    top: -2px;
    left: -35px
`;

export const OptionsContainer = styled.div`
    display: flex;
    align-items: center

    @media and (max-width:768px){
        display: none;
    }
`;

export const Icon = styled.img`
    width: 27px;
    height: 27px;
    margin-left: 8px;

    @media screen and (max-width: 768px) {
        display: none;   
      }

`;

export const Avatar = styled.div`
    flex: 0 0 40px;
    margin-left: 30px;
    position: relative;
    cursor: pointer;

    >img{
        width: 40px;
        height: 40px;
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
    @media screen and (max-width: 768px) {
        display: none;   
      }

`;