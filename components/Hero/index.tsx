import * as React from 'react';
import CopyField from "../CopyField";
import Options from "../Options";

interface HeroProps {

}

const Hero: React.FC<HeroProps> = ({}) => {

  const [copyString, setCopyString] = React.useState('yarn create react-app my-app');

  return (
    <>
      <CopyField copyString={copyString}/>
      <Options setCopyString={setCopyString}/>
    </>
  )
};

export default React.memo<HeroProps>(Hero);