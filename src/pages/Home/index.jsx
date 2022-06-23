import { Header } from "../../components/Header";
import { Post } from "../../components/Post";
import { SideBar } from "../../components/SideBar";

import { Container, Wrapper } from "./style";

export function Home() {
  return (
    <Container>
      <Header />
      <Wrapper>
        <SideBar />
        <main>
          <Post author="Dani" content="lorem ipsum" />
          <Post author="Dani" content="lorem ipsum" />
        </main>
      </Wrapper>
    </Container>
  );
}
