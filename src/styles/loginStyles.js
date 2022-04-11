import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
flex-wrap: nowrap;
width: 380px;
margin: 5% auto 12px;
padding-top: 62px;
overflow-y:hidden;
overflow-x:none;

     a{
        display:flex;
        font-size: 14px;
        font-weight: bold;
    }

    h1{
        margin-left: 30%;
        font-family: sans-serif;
        font-size: 24px;
    }

    p{
        font-family: sans-serif;
        font-size: 14px;
        line-height: 18px;
        color: rgba(22,24,35,.5);
        text-align: center;
        margin: 7px 0px 10px  45px;  
    }

    li{
        align-items: center;
        font-size: 16px;
        font-family: sans-serif;
        text-decoration: none;
        width: 100%;
        min-height: 46px;
        border: 1px solid rgba(22,24,35,.12);
        box-sizing: border-box;
        border-radius: 2px;
        display: block;
        flex-direction: row;
        align-items: center;
        text-align: center;
        justify-content: center;
        margin-bottom: 12px;
        padding: 0 12px 0 0;
        cursor: pointer;    
    }

    img{
        margin-right: 10px;
        width: 40px;
        height: 40px;
        padding: 7px;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        border-right: 1px solid rgba(22,24,35,.12);
    }

`;

export const TextButton = styled.div`
    margin: auto;
`;