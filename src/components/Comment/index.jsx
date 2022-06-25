import { Container, CommentBox, CommentContent } from "./style";
import { Icon } from "../Icon";
import Avatar from "../../assets/profile.png";

import { ThumbsUp, Trash } from "phosphor-react";

export function Comment({content}) {
  return (
    <Container>
      <Icon type='comment' src={Avatar} />

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
          <p>{content}</p>
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
