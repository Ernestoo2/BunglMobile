import CategoryList from "../../features/CategoryList";
import List from "./List";
import ListBoys from "./ListItemsApparel/ListBoys";
import ListGirls from "./ListItemsApparel/ListGirls";
import ListMen from "./ListItemsApparel/ListMen";
import ListWomen from "./ListItemsApparel/ListWomen";
import Offers from "./Offers";
import SubHeader from "./SubHeader";

// import ListItem from "./ListItems";

function Main() {
  return (
    <>
      <Offers />
      <CategoryList />
      <SubHeader
        text="apparel under 10k"
        icon="shopping-cart"
        bgColor="var(--secondary-color)"
        txtColor="var(--primary-color)"
      />
      <List>
        <ListMen text="men" />
        <ListWomen text="women" />
        <ListGirls text="girls" />
        <ListBoys text="boys" />
      </List>
      <SubHeader
        text="home"
        icon="add"
        bgColor="var(--primary-color)"
        txtColor="var(--white)"
      />
      <List>
        <ListMen text="men" />
        <ListWomen text="women" />
        <ListGirls text="girls" />
        <ListBoys text="boys" />
      </List>
    </>
  );
}

export default Main;
