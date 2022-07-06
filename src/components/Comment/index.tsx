import { Container, CommentBox, CommentContent } from "./style";
import { Icon } from "../Icon";
import Avatar from "../../assets/profile.png";

import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1;
    });
  }

  return (
    <Container>
      <Icon type="comment" src={Avatar} />

      <CommentBox>
        <CommentContent>
          <header>
            <div>
              <strong>Dani Egito</strong>
              <time>Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </CommentContent>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir -<span>{likeCount}</span>
          </button>
        </footer>
      </CommentBox>
    </Container>
  );
}
