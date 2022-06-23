import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-top: 1.5rem;
  gap: 1rem;
`;

export const CommentBox = styled.div`
  flex: 1;

  > footer {
    margin-top: 1rem;

    > button {
      background: transparent;
      border: 0;
      color: var(--gray-400);
      cursor: pointer;

      display: flex;
      align-items: center;

      &:hover {
        color: var(--green-300);
      }
    }

    > button svg {
      margin-right: 0.5rem;
    }

    span {
      margin: 0 0.5rem;
    }
  }
`;

export const CommentContent = styled.div`
  background-color: var(--gray-700);
  border-radius: 4px;
  padding: 1rem;

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    > div {
      display: flex;
      flex-direction: column;

      strong {
        font-size: 0.875rem;
        line-height: 1.6;
      }

      span {
        font-size: 0.75rem;
        color: var(--gray-400);
        line-height: 1.6;
      }
    }

    > button {
      background-color: transparent;
      border: 0;
      color: var(--gray-400);
      cursor: pointer;

      line-height: 0; //corrige erro causado pelo focus
      border-radius: 2px;

      &:hover {
        color: var(--red-500);
      }
    }
  }

  > p {
    margin-top: 1rem;
    color: var(--gray-300);
  }
`;

export const Author = styled.div``;
