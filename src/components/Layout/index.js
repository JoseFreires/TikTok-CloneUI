import Header from '../Header';
import SideBar from '../Sidebar';
import { Container, 
        SidebarContainer, 
        ContentContainer } 
from './style';


function Layout({children}) {
    return ( 
    <>
        <Header></Header>
        <Container>
            <SidebarContainer>
                <SideBar></SideBar>
            </SidebarContainer>
            <ContentContainer>
                { children }
            </ContentContainer>
        </Container>
    </>
    );
}

export default Layout;