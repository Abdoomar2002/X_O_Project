import React from "react";
import Nav from "./comp/Nav.jsx";
import Welcome from"./comp/welcome.jsx";
import Categories from"./comp/categories.jsx";
import Cards from "./comp/cards.jsx";
import Bio from "./comp/bio.jsx";
import Footer from"./comp/footer.jsx";
function Home() {
  return (
    <div>

    <Welcome />
    <Categories />
    <Cards />
    <Bio />

    </div>
  );
}

export default Home;
