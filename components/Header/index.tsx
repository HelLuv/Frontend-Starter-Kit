import * as React from 'react';

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = ({}) => {

  return (
    <h1>Frontend Starter Kit</h1>
  )
};

export default React.memo<HeaderProps>(Header);