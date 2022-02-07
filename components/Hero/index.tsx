import * as React from 'react';
import {Autocomplete, TextField} from "@mui/material";
import CopyField from "../CopyField";

interface HeroProps {

}

const Hero: React.FC<HeroProps> = ({}) => {

  const options = [
    {label: 'React JS', id: 1},
  ];
  return (
    <>
      <CopyField/>
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