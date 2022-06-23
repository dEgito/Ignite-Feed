import CoverImage from "../../assets/Cover.svg";
import Avatar from "../../assets/profile.png";
import { Aside, Profile, Cover, Icon } from "./style";
import { PencilLine } from "phosphor-react";

export function SideBar() {
  return (
    <Aside>
      <Cover src={CoverImage} />

      <Profile>
        <Icon src={Avatar} />
        <strong>Danielly Egito</strong>
        <span>Web Developer</span>
      </Profile>

      <footer>
        <a href="">
          <PencilLine size={20}/>
          Editar perfil
        </a>
      </footer>
    </Aside>
  );
}
