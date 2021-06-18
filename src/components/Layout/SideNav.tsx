import React, { FC } from "react";
import { Container } from "react-bootstrap";

export const navigationList = [{ title: "Permits", link: "/permits" }];

export const SideNav: FC = () => {
  return (
    <>
      <div className="sidenav">
        <Container>
          {/* <div className="app__logo pb-5 pt-2">
            <img
              src="https://media.autochek.africa/file/publicAssets/full-color-logo-new.png"
              alt="autochek"
            />
          </div> */}
          {navigationList.map((navItem) => {
            return (
              <div
                key={new Date().toLocaleDateString()}
                className="sidenavigation-item text-left"
              >
                {navItem.title}
              </div>
            );
          })}
        </Container>
      </div>
    </>
  );
};
