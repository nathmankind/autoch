import React, { FC } from "react";
import { Container } from "react-bootstrap";
import { SideNav } from "./SideNav";
import { TopNav } from "./TopNav";

const Layout: FC = ({ children }) => {
  return (
    <>
      <div className="m__layout-nav">
        <TopNav />
      </div>
      <div className="main-layout__wrapper d-flex">
        <div className="sideNavbar-layout">
          <SideNav />
        </div>
        <div className="main-body-container">
          <main className="layout__main-content">
            <Container>{children}</Container>
          </main>
        </div>
      </div>
    </>
  );
};
export default Layout;
