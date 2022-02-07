import * as React from 'react';
import {Autocomplete, TextField} from "@mui/material";
import CopyField from "../CopyField";

interface HeroProps {

}

const Hero: React.FC<HeroProps> = ({}) => {

  const [copyString, setCopyString] = React.useState('yarn create react-app my-app');

  const options = [
    {label: 'React JS', id: 1},
  ];
  return (
    <>
      <CopyField copyString={copyString}/>
      <Autocomplete
        disablePortal
        id="mvp-library"
        options={options}
        sx={{width: 300}}
        renderInput={(params) => <TextField {...params} label="MVP Library"/>}
      />
    </>
  )
};

export default React.memo<HeroProps>(Hero);