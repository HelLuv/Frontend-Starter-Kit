import * as React from 'react';
import styled from "styled-components";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

interface CopyFieldProps {

}

const CopyFieldWrapper = styled.div`
  display: flex;
  justify-content: center;
  border: 2px solid #30363d;
  border-radius: 6px;
  width: fit-content;
  margin: 4rem auto;
  padding-right: 1rem;
  font-size: 1em;
  transition: all 0.2s linear;

  &:hover {
    border: 2px solid #66BB6A;

    button.copy-button {
      svg {
        color: #66BB6A;
      }
    }
  }

  span.copy-field {
    padding: 1rem 2rem;
    background-color: transparent;
  }

  button.copy-button {
    background-color: transparent;
    border: none;
    cursor: pointer;

    svg {
      transition: all 0.2s ease-in-out;
    }


    &:hover {
      svg {
        color: rgb(102, 187, 106);
      }
    }
  }
`;

const CopyField: React.FC<CopyFieldProps> = ({}) => {

  const [copyString, setCopyString] = React.useState('copy this');

  return (
    <CopyFieldWrapper>
      <span role="button" className="copy-field">{copyString}</span>
      <button className="copy-button">
        <ContentCopyIcon titleAccess={"Copy Command to Clipboard"} color={"action"}/>
      </button>
    </CopyFieldWrapper>
  )
};

export default React.memo<CopyFieldProps>(CopyField);