import styled from 'styled-components';


export const Container = styled.div`  
    border-top: 1px solid rgba(34,90,98,0.2);
    position: fixed;
    width: 100%;
    z-index: 1000;
    top: 10;
    right: 0;
    left: 0;
    height: 80px; 
    text-align: center;

    > p{
        color: #fe2c55;
    }
`;

export const Bottom = styled.div`
    background-color: #000;
    font-weight: 500;
    height:15vh;
    color: #fff;
    padding: 5px;
    display: flex;
    justify-content: space-between;
`;

export const Button = styled.div`
   border: solid 2px #fff;
   width: 250px;
   height: 30px;
   margin-top: 20px;
`;