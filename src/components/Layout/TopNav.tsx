import React, { FC } from "react";
import userImg from "../../assets/user-avatar.png";
import { HiMenu } from "react-icons/hi";

export const TopNav: FC = () => {
  return (
    <>
      <nav className="main__navbar">
        <div className="topnav d-flex justify-content-between">
          <div
            className="application-logo d-flex align-item-center"
            style={{ color: "black" }}
          >
            <div className="logo-img p-3 my-auto">APPLOGO</div>
          </div>
          <div className="mobile-menu my-auto">
            <HiMenu />
          </div>
          <div className="top-right-nav-item p-3 ">
            <img src={userImg} alt="user-img" />

            <div className="user-info my-auto">
              <div className="name">Clement Asuquo</div>
              <div className="designation">Autochek Admin</div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
