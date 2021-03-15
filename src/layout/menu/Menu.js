import Styled from "styled-components";

function Menu() {
  return (
    <MenuContainer>
      <MenuItem>Weather Sample</MenuItem>
    </MenuContainer>
  );
}

const MenuContainer = Styled.div`
  width: 250px; height: calc(100% - 0.6rem - 120px);
  margin: 0.2rem 0 0.2rem 0.2rem;
  background-color: #C0C4C3;
  
  font-size: 1rem;
`;

const MenuItem = Styled.div`
  padding: 2rem 2rem;
  font-weight: 550;
  cursor: pointer;

  &:hover {
    background-color: #fbfef9;
    box-shadow: inset 0.2rem 0.2rem #e2fcef;
  }
`;

export default Menu;
