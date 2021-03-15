import Styled from "styled-components";

function Logo() {
  return (
    <LogoContainer>
      <StlyedLogo src="/logo.png" alt="logo" />;
    </LogoContainer>
  );
}

const LogoContainer = Styled.div`
  width: 250px; height: 120px;
  margin: 0.2rem 0 0 0.2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #A0A6A4;
  color:
`;

const StlyedLogo = Styled.img`
  width: 64px; height: 64px;
  padding: 0;
  margin: auto auto;
`;

export default Logo;
