import * as React from 'react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {CopyFieldWrapper} from './styled';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';

interface CopyFieldProps {
  copyString: string;
}

const CopyField: React.FC<CopyFieldProps> = ({copyString}) => {

  const [tooltipTitle, setTooltipTitle] = React.useState<string>("Copy Command to Clipboard");
  const [copied, setCopied] = React.useState<boolean>(false);

  const onClickHandler = (e?: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    if (e?.target) {
      const element = e.target as HTMLInputElement;
      element.select();
    }
    navigator.clipboard.writeText(copyString).then((r) => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1500);
    });
  };

  return (
    <CopyFieldWrapper title={tooltipTitle} className={copied ? "copied" : ""}>
      <input readOnly onClick={(e) => onClickHandler(e)} onChange={(r) => r}
             role="button" className="copy-field"
             value={copyString}/>
      <button onClick={() => onClickHandler()} className="copy-button">
        {!copied ? <ContentCopyIcon titleAccess={tooltipTitle} color="action"/> :
          <DoneOutlineIcon titleAccess={tooltipTitle} color="action"/>}

      </button>
    </CopyFieldWrapper>
  )
};

export default React.memo<CopyFieldProps>(CopyField);