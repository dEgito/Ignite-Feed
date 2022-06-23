import styled from "styled-components";

export const Aside = styled.aside`
  background-color: var(--gray-800);
  border-radius: 4px;
  overflow: hidden;

  footer {
    border-top: 1px solid var(--gray-600);
    margin-top: 1.5rem;
    padding: 1.5rem 2rem 2rem;

    a {
      background: transparent;
      color: var(--green-500);
      border: 1px solid var(--green-500);
      border-radius: 4px;
      height: 50px;
      padding: 0 1.5rem;
      font-weight: 600;
      display: block;
      text-decoration: none;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;

      &:hover {
        background-color: var(--green-500);
        color: var(--white);
        transition: color 0.2s, background-color 0.2s;
      }
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    margin-top: 1rem;
    color: var(--gray-100);
    line-height: 1.6;
  }

  span {
    font-size: 0.875rem;
    color: var(--gray-400);
    line-height: 1.6;
  }
`;

export const Cover = styled.img`
  width: 100%;
  height: 72px;
  object-fit: cover;
`;

