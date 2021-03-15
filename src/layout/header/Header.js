import Styled from "styled-components";

function Header() {
  return (
    <StyledHeaderContainer>
      <StyledHeader src="/text.png" alt="Vivsoft" />
    </StyledHeaderContainer>
  );
}

const StyledHeaderContainer = Styled.div`
  width: 100%; height: 120px;

  background-color: #C0C4C3;
  margin: 0.2rem 0.2rem 0 0.2rem;
`;

const StyledHeader = Styled.img`
  width: 232px; height: 64px;

  margin: 0 auto 0 auto;
  padding: 2rem 0.5rem;
`;

export default Header;
