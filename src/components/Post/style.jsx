import styled from "styled-components";

export const Article = styled.article`
  background-color: var(--gray-800);
  border-radius: 4px;
  padding: 2.5rem;

  margin-bottom: 2rem;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  time {
    font-size: 0.875rem;
    color: var(--gray-400);
  }

  form {
    width: 100%;
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid var(--gray-600);

    > strong {
      line-height: 1.6;
      color: var(--gray-100);
    }

    > textarea {
      width: 100%;
      background-color: var(--gray-900);
      border: 0;
      resize: none;
      height: 6rem;
      padding: 1rem;
      border-radius: 4px;
      color: var(--gray-100);
      line-height: 1.4;
      margin-top: 1rem;
    }

    footer {
      visibility: hidden;
      max-height: 0;

      > button {
        padding: 1rem 1.5rem;
        margin-top: 1rem;
        border-radius: 4px;
        border: 0;
        background-color: var(--green-500);
        color: var(--white);
        font-weight: bold;
        cursor: pointer;

        /* display: none; Não é tão interessante por causa da acessibilidade, por isso usar o footer */

        &:hover {
          background-color: var(--green-300);
          transition: background-color 0.1s;
        }
      }
    }

    &:focus-within footer {
      visibility: visible;
      max-height: none;
    }
  }
`;

export const Content = styled.article`
  display: flex;
  flex-direction: column;
  line-height: 1.6;
  color: var(--gray-300);
  margin-top: 1.5rem;

  p {
    margin-top: 1rem;
  }

  a {
    font-weight: bold;
    color: var(--green-500);
    text-decoration: none;
    margin: 0 2px;

    &:hover {
      color: var(--green-300);
    }
  }
`;

export const Author = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  > div {
    display: flex;
    flex-direction: column;

    strong {
      color: var(--gray-100);
      line-height: 1.6;
    }

    span {
      font-size: 0.875rem;
      color: var(--gray-400);
      line-height: 1.6;
    }
  }
`;

export const Icon = styled.img`
  width: calc(3rem + 12px);
  height: calc(3rem + 12px);
  border-radius: 4px;
  border: 4px solid var(--gray-800);

  outline: 2px solid var(--green-500);
`;

export const CommentList = styled.div``;
