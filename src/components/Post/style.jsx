import styled from 'styled-components'

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
        font-size: .875rem;
        color: var(--gray-400);
    }
`;

export const Content = styled.article`
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
            font-size: .875rem;
            color: var(--gray-400);
            line-height: 1.6;
        }
    }
`;

export const Icon = styled.img`
  width: calc(3rem + 12px);
  height: calc(3rem + 12px);
  border-radius: 8px;
  border: 4px solid var(--gray-800);

  outline: 2px solid var(--green-500);
`;

