import { Header } from "../../components/Header";
import { Post } from "../../components/Post";
import { SideBar } from "../../components/SideBar";

import { Container, Wrapper } from "./style";

const posts = [
  {
    id: 1,
    author: {
      avatar: "https://github.com/dEgito.png",
      name: "Dani Egito",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "👉 jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-07-06 12:53:00"),
  },

  {
    id: 2,
    author: {
      avatar: "https://github.com/JessyLeal.png",
      name: "MicroJessy",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Henlooo 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "👉 jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-06-24 08:53:00"),
  },
];

export function Home() {
  return (
    <Container>
      <Header />
      <Wrapper>
        <SideBar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </Wrapper>
    </Container>
  );
}
