import * as React from 'react';

interface MainLayoutProps {

}

const MainLayout: React.FC<MainLayoutProps> = ({}) => {

  return (
    <h1>MainLayout</h1>
  )
};

export default React.memo<MainLayoutProps>(MainLayout);