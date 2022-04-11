import styled from 'styled-components';

export const Container = styled.div`
    margin: auto;
    max-width: 1550px;
    display: flex;
    justify-content: flex-start;
    flex: 1 1 auto;
    padding-top: 70px;


`;

export const SidebarContainer = styled.div`
    flex: 0 0 250px;
    @media (max-width: 768px){
        flex: 0;
    }
`;

export const ContentContainer = styled.div`
    flex: 1;
    margin: 0 auto;
    padding: 20px 20px;
    display:  flex;
    max-width: 1194px;   

   
   
`;