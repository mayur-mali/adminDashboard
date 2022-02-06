import React from "react";

import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";
export default function AdminDashboard() {
  const [sidebar, setsidebar] = React.useState(false);
  const [openTab, setOpenTab] = React.useState(1);
  const sidebarOpen = () => {
    setsidebar(!sidebar);
  };
  return (
    <div>
      <div className="w-full min-h-screen h-full relative flex bg-gray-900">
        <AdminSidebar setOpenTab={setOpenTab} sidebar={sidebar} />
        <AdminNavbar sidebar={sidebar} sidebarOpen={sidebarOpen} />
        <div
          className={"w-full " + (sidebar ? " md:-ml-0" : " md:-ml-0 -ml-64")}
        >
          <div className="pt-20 px-6">
            <div className="h-auto min-h-screen py-4">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <div className="space-y-5"></div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <h1 className="text-white">tab 2</h1>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <h1 className="text-white">tab 3</h1>
                </div>
                <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                  tab-4
                </div>
                <div className={openTab === 5 ? "block" : "hidden"} id="link5">
                  <h1 className="text-white">tab 5</h1>
                </div>
                <div className={openTab === 6 ? "block" : "hidden"} id="link6">
                  tab 6
                </div>
                <div className={openTab === 7 ? "block" : "hidden"} id="link7">
                  <h1 className="text-white">tab 7</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            "bg-black md:hidden  fixed top-0 left-0 bg-opacity-50 z-40 h-full cursor-pointer w-full" +
            (sidebar ? " hidden" : " block")
          }
          onClick={() => setsidebar(!sidebar)}
        ></div>
      </div>
    </div>
  );
}
