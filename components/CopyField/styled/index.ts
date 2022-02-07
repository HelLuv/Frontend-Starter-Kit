import styled from "styled-components";

const CopyFieldWrapper = styled.div`
  display: flex;
  justify-content: center;
  border: 2px solid #30363d;
  border-radius: 6px;
  width: fit-content;
  margin: 4rem auto;
  font-size: 1em;
  transition: all 0.2s linear;
  position: relative;

  &:hover {
    border: 2px solid #90caf9;

    .copy-button {
      svg {
        color: #90caf9;
      }
    }
  }

  .copy-field {
    padding: 1rem 2rem;
    background-color: transparent;
    color: #fff;
    border: none;
    width: 100%;
    font-family: 'Space Mono', monospace;
    outline: none;
  }

  .copy-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    width: 56px;
  }

  &.copied {
    border: 2px solid #66bb6a;

    .copy-button {
      svg {
        color: #66bb6a;
      }
    }
  }
`;

export {
  CopyFieldWrapper
}