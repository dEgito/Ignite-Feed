import { Article, Author, Content } from "./style";
import { Icon } from "../Icon";
import { Comment } from "../Comment";

import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useState } from "react";

export function Post({ author, content, publishedAt }) {
  const [newCommentText, setNewCommentText] = useState("");
  const [comments, setComments] = useState(["post bacaninha"]);

  const publishedDateFormatted = format(
    publishedAt,
    "dd 'de' LLLL 'às' HH:mm'h'", //as aspas simples impede que o date-fns formate os textos
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true, //adiciona o "há"
  });

  function handleCreatNewComment() {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentChange() {
    setNewCommentText(event.target.value);
  }

  return (
    <Article>
      <header>
        <Author>
          <Icon src={author.avatar} />

          <div>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </Author>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <Content>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p>
                <a>{line.content}</a>
              </p>
            );
          }
        })}

        <p>
          <a href="">#novoprojeto</a>
          <a href="">#nlw</a>
          <a href="">#rocketseat</a>
        </p>
      </Content>

      <form onSubmit={handleCreatNewComment}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div>
        {comments.map((comment) => {
          return <Comment content={comment} />;
        })}
      </div>
    </Article>
  );
}
