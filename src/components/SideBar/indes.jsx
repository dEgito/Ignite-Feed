import Cover from "../../assets/Cover.svg";

import { Aside, Profile } from "./style";

export function SideBar() {
  return (
    <Aside>
      <img src={Cover} />

      <Profile>
        <img />
        <stong>Danielly Egito</stong>
        <span>Web Developer</span>
      </Profile>

      <footer>
        <a>Editar perfil</a>
      </footer>
    </Aside>
  );
}
