import { Content } from "./style";
import Logo from "../../assets/Ignite simbol.svg";

export function Header() {
  return (
    <Content>
      <img src={Logo} alt="logo-ignite" />
      <p>Ignite Feed</p>
    </Content>
  );
}
