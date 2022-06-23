import styled from "styled-components";

export const Content = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1.25rem 0;

  background-color: var(--gray-800);
  width: 100%;
  height: 80px;
  color: var(--white);

  img {
    height: 2.5rem;
  }
`;
