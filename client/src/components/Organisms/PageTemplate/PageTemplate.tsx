import React, { useState } from 'react';
import SideBar from 'components/Molecules/SideBar';
import NavBar from 'components/Molecules/NavBar';

interface Props {
  children: React.ReactNode;
}

function PageTemplate(props: Props) {
  const { children } = props;
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(true);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <SideBar isSideBarOpen={isSideBarOpen}></SideBar>
      <NavBar
        setIsSideBarOpen={setIsSideBarOpen}
        isSideBarOpen={isSideBarOpen}
      />

      {children}
    </div>
  );
}

export default PageTemplate;
