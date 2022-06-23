import { Article, Author, Content } from "./style";
import { Icon } from "../Icon";
import Avatar from "../../assets/profile.png";
import { Comment } from "../Comment";

export function Post() {
  return (
    <Article>
      <header>
        <Author>
          <Icon src={Avatar} />

          <div>
            <strong>Dani Egito</strong>
            <span>Web Devolper</span>
          </div>
        </Author>

        <time title="23 de junho às 08:53h" dateTime="2022-06-23 08:52:03">
          Publicado a 1h
        </time>
      </header>

      <Content>
        <p>Fala galeraa 👋</p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>
          <a href="">👉 jane.design/doctorcare</a>
        </p>

        <p>
          <a href="">#novoprojeto</a>
          <a href="">#nlw</a>
          <a href="">#rocketseat</a>
        </p>
      </Content>

      <form>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div>
        <Comment />
        <Comment />
      </div>
    </Article>
  );
}
