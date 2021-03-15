import Styled from "styled-components";

import Header from "./header/Header";
import Logo from "./logo/Logo";
import Menu from "./menu/Menu";

function PageLayout(props) {
  return (
    <Container>
      <Aside>
        <Logo />
        <Menu />
      </Aside>
      <InnerContainer>
        <Header />
        <ChildContainer>{props.children}</ChildContainer>
      </InnerContainer>
    </Container>
  );
}

const InnerContainer = Styled.div`
   width: calc(100vw - 250px - 0.6rem);
   height: 100vh;
   display: flex;
   flex-direction: column;
`;

const ChildContainer = Styled.div`
  width: calc(100% - 0.4rem); 
  height: calc(100% - 0.6rem - 100px);
  background-color: #A0A6A4;
  padding: 0.2rem 0.2rem;
  margin: 0.2rem 0.2rem 0.2rem 0.2rem;
`;

const Container = Styled.div`
  display: flex;
`;

const Aside = Styled.aside`
  min-width: 250px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export default PageLayout;
