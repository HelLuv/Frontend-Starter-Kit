import * as React from 'react';

// import {Autocomplete, TextField} from "@mui/material";

interface HeroProps {

}

const Hero: React.FC<HeroProps> = ({}) => {

  const options = [
    {label: 'The Godfather', id: 1},
    {label: 'Pulp Fiction', id: 2},
  ];
  return (
    <>
      {/*<Autocomplete*/}
      {/*  disablePortal*/}
      {/*  id="combo-box-demo"*/}
      {/*  options={options}*/}
      {/*  sx={{width: 300}}*/}
      {/*  renderInput={(params) => <TextField {...params} label="Movie"/>}*/}
      {/*/>*/}
    </>
  )
};

export default React.memo<HeroProps>(Hero);