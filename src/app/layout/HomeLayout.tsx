import React from "react";
import type { Metadata } from "next";
import Topbar from "../components/nav-bar/TopBar";
import Bottombar from "../components/nav-bar/BottomBar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const HomeLayout = ({ children }: any) => {
  return (
    <div>
      <div className="w-full z-50">
        <Topbar />
        <Bottombar />
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
};

export default HomeLayout;
