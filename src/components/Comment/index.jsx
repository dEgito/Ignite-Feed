import { Container, CommentBox, CommentContent } from "./style";
import { ThumbsUp, Trash } from "phosphor-react";
import { Icon } from "../Icon";

export function Comment() {
  return (
    <Container>
      <Icon />

      <CommentBox>
        <CommentContent>
          <header>
            <div>
              <strong>Dani Egito</strong>
              <time>Cerca de 1h atrás</time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Top demais</p>
        </CommentContent>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir -<span>20</span>
          </button>
        </footer>
      </CommentBox>
    </Container>
  );
}
