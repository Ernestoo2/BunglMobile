import styled from "styled-components";

const StyledListItem = styled.div`
  display: flex;
  background-color: var(--primary-color);
  border-radius: 25px;
  position: relative;
  justify-content: center;
  & img {
    width: 100%;
    
  }
  & span {
    display: grid;
    place-items: center;
    color: var(--white);
    text-transform: uppercase;
    background-color: var(--secondary-color);
    width: 145.25px;
    height: 84.62px;
    border-radius: 8px;
    font-weight: 500;
    position: absolute;
    top: 130px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }
`;

function ListMen() {
  return (
    <StyledListItem>
      <div>
        <img src=".././images/AparelUnder20k/men.png" alt="men" />
        <span>MEN</span>
      </div>
    </StyledListItem>
  );
}

export default ListMen;
