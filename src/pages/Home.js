import CategorySearchBarUI from "../ui/CategorySearchBarUI";
import Header from "../ui/HomePageFiles/Header";
import Layout from "../InerUI/Layout";
import Main from "../ui/HomePageFiles/Main";
import Navbar from "../features/Navbar";

function Landing() {
  return (
    <>
      <Header />
      <Main />
      <CategorySearchBarUI/>
      <Layout/>
      <Navbar />
    </>
  );
}

export default Landing;
