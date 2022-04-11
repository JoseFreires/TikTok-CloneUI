import styled from 'styled-components';

export const Container = styled.div`
    max-width:100%;
    position: fixed;
    display: flex;
    top: 0;
    right: 0;
    left: 0;
    height: 70px;
    background: #fff;
    justify-content: space-between;
    z-index: 1000;
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


export const Option = styled.div`
    color: rgba(34,90,98,0.5);
    margin: 20px 10px;
    font-size: 16px;
    font-weight: bold;
`;
