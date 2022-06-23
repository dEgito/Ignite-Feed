import styled from "styled-components";

export const Image = styled.img`
  width: calc(3rem + 12px);
  height: calc(3rem + 12px);
  border-radius: 4px;

  margin-top: ${(props) => {
    switch (props.type) {
      case "sidebar":
        return "-2rem;";

      default:
        return "0;";
    }
  }};

  border: ${(props) => {
    switch (props.type) {
      case "comment":
        return "0";

      default:
        return "4px solid var(--gray-800)";
    }
  }};

  outline: ${(props) => {
    switch (props.type) {
      case "comment":
        return "0";

      default:
        return "2px solid var(--green-500)";
    }
  }};
`;
