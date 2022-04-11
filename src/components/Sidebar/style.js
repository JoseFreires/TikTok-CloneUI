import styled from 'styled-components';

export const Container = styled.div`
  top: 70px;
  margin-left: 350px;
  bottom: 0;
  width: 250px;
  height: 100%;
  padding-top: 26px;

  @media screen and (max-width: 1048px) {
    margin-left: 0px;
  }

  @media screen and (max-width: 768px) {
      margin-left: 0px;
      padding: 0 8px;
      width: 72px;
      flex: 0 0 72px;
      border-right: 1px solid rgba(22, 24, 35, 0.12);
      box-shadow: 0px 2px 8px rgb(0 0 0 / 6%);
 
    > p{
      overflow: hidden;
    }
}
  
`;
export const MenuItem = styled.div`
  cursor: pointer;
  color: #161823;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 12px;
  box-sizing: border-box;
  height: 60px;

  :hover {
    background: rgba(22, 24, 35, 0.03);
  }

  > span {
    font-weight: ${(props) => (props.active ? '700' : '400')};
    margin-left: 13px;
    font-size: 15px;
    line-height: 60px;
    color: ${(props) => (props.active ? props.theme.colors.primary : 'black')};
  }

  > img {
    width: 31.99px;
    height: 31.99px;
  }
  
  @media screen and (max-width: 768px) {

  > span{
    display: none;   
  }
}
`;

export const Tags = styled.div`
  color: rgba(22, 24, 35, 0.50);
  padding: 5px;
  margin: 5px;
  border-radius: 50px;
  border:solid 1px rgba(22, 24, 35, 0.20);

  >span{
    color: #000;
    font- size: 20px;
    font-weight: bolder;
    margin-right: 5px;
  }
`;

export const Following = styled.div`
  width: 100%;
  padding: 20px 0;
  border-bottom: 0.5px solid rgba(22, 24, 35, 0.12);
`;

export const SuggestionsAccounts = styled.div`
  width: 100%;
  padding: 20px 0;
  border-top: 0.5px solid rgba(22, 24, 35, 0.12);
  border-bottom: 0.5px solid rgba(22, 24, 35, 0.12);
`;

export const Discover = styled.div`
padding: 30px;
display: flex;
flex-wrap: wrap;
border-bottom: 0.5px solid rgba(22, 24, 35, 0.12);
max-heigth: 100px;

@media screen and (max-width: 768px) {
    display: none;   
  }
`;

export const FollowingHeader = styled.div`
  font-weight: 600;
  font-size: 15px;
  line-height: 22px;
  color: rgba(22, 24, 35, 0.80);
  height: 8px;
  padding-left: 16px;
  margin-bottom: 28px;

  @media screen and (max-width: 768px) {
      display: none;   
    }
  
`;

export const InfoContainer = styled.div`
  margin-top: 16px;
  padding-left: 16px;
  padding-bottom: 24px;
  width: 240px;
  box-sizing: border-box;
  color: rgba(22, 24, 35, 0.5) !important;

  @media screen and (max-width: 768px) {
    display: none;   
  }
`;

export const Links = styled.div`
  margin-bottom: ${(props) => (props.margin ? '8px' : '0px')};

  > a {
    cursor: pointer;
    display: inline-block;
    margin-right: 5px;
    margin-top: 5px;
    font-weight: 600;
    font-size: 12px;
    line-height: 12px;
    color: rgba(22, 24, 35, 0.5);
    font-family: 'proxima-semibold', PingFangSC, sans-serif;
    :hover {
      text-decoration: underline;
    }
  }
`;