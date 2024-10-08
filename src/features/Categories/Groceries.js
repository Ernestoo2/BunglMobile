import MiniHeader from "../../ui/CategoryPageFiles/MiniHeader";
import ProductList from "../../ui/CategoryPageFiles/ProductList";
import SlideBar from "../../ui/CategoryPageFiles/SlideBar";
import styled from "styled-components";

const StyledGroceries = styled.div``;

function Groceries() {
  return (
    <StyledGroceries>
      <SlideBar />
      <ProductList />
      <MiniHeader fontSize="18px" textOne="vegetables" textTwo="view" />
      <MiniHeader fontSize="18px" textOne="electronics" textTwo="view" />
    </StyledGroceries>
  );

}

export default Groceries;
