import React from "react";
import { Logo, Header, Hamburger } from "./styles";

function refreshPage() {
  window.location.reload(false);
}

const HeaderComponent = () => (
  <Header>
    <Logo
      title="Rick and Morty - Official Logo™"
      onClick={refreshPage}
    />
    <Hamburger />
  </Header>
);

export default HeaderComponent;
