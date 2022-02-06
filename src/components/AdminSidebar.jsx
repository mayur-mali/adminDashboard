import React from "react";
import { GoHome } from "react-icons/go";
import { GoDashboard } from "react-icons/go";
import ReactTooltip from "react-tooltip";
import {
  AiOutlineVideoCameraAdd,
  AiOutlineUserAdd,
  AiOutlineUser,
  AiOutlinePlayCircle,
} from "react-icons/ai";
import { GiProgression } from "react-icons/gi";
import { IoAnalytics } from "react-icons/io5";

export default function AdminSidebar(props) {
  return (
    <div className="z-50">
      <div
        className={
          " capitalize sidebar-wrapper h-full bg-gray-700" +
          (props.sidebar
            ? " md:w-20 md:block hidden"
            : "  w-64 animate__fadeInLeft")
        }
      >
        <div
          className={
            "fixed h-full sidebar-wrapper " +
            (props.sidebar ? " md:w-20" : "  w-64 ")
          }
        >
          <div className="flex justify-center items-center h-16">
            {!props.sidebar && (
              <div className="flex-shrink-0">
                <img
                  className="block lg:hidden h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                />
                <img
                  className="hidden lg:block h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                  alt="Workflow"
                />
              </div>
            )}
            {props.sidebar && (
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              />
            )}
          </div>
          <div className="h-full ">
            <div
              className={
                "px-3 py-3 flex  items-center bg-gray-900 bg-opacity-25" +
                (props.sidebar ? " justify-center" : " justify-start")
              }
            >
              {!props.sidebar && (
                <h3 className="font-bold animate__fadeIn text-white">
                  Dashboard
                </h3>
              )}
              {props.sidebar && (
                <GoDashboard className="text-2xl font-semibold text-white" />
              )}
            </div>
            <div className="px-2 pt-2 space-y-4">
              <a
                className={
                  "bg-gray-900 text-white group flex items-center px-2  text-sm font-medium rounded-md" +
                  (props.sidebar ? " flex-col py-3" : " flex-row py-2")
                }
                onClick={(e) => {
                  e.preventDefault();
                  props.setOpenTab(1);
                }}
                data-toggle="tab"
                href="/link1"
                role="tablist"
                data-tip-disable={props.sidebar ? "false" : "true"}
                data-tip="home"
              >
                <GoHome
                  className={"text-2xl " + (props.sidebar ? " mr-0" : " mr-2")}
                />
                <span
                  className={
                    props.sidebar ? "  hidden" : " block animate__fadeIn"
                  }
                >
                  home
                </span>
              </a>
              <ReactTooltip />
              <a
                onClick={(e) => {
                  e.preventDefault();
                  props.setOpenTab(2);
                }}
                data-toggle="tab"
                href="/link2"
                role="tablist"
                data-tip-disable={props.sidebar ? "false" : "true"}
                data-tip="anaylitics"
                className={
                  "bg-gray-900 text-white group flex items-center px-2  text-sm font-medium rounded-md" +
                  (props.sidebar ? " flex-col py-3" : " flex-row py-2")
                }
              >
                <IoAnalytics
                  className={"text-2xl " + (props.sidebar ? " mr-0" : " mr-2")}
                />
                <span
                  className={
                    props.sidebar ? "  hidden" : " block animate__fadeIn"
                  }
                >
                  anaylitics
                </span>
              </a>
              <ReactTooltip />
              <a
                onClick={(e) => {
                  e.preventDefault();
                  props.setOpenTab(3);
                }}
                data-toggle="tab"
                href="/link3"
                data-tip-disable={props.sidebar ? "false" : "true"}
                data-tip="salse"
                role="tablist"
                className={
                  "bg-gray-900 text-white group flex items-center px-2  text-sm font-medium rounded-md" +
                  (props.sidebar ? " flex-col py-3" : " flex-row py-2")
                }
              >
                <GiProgression
                  className={"text-2xl " + (props.sidebar ? " mr-0" : " mr-2")}
                />
                <span
                  className={
                    props.sidebar ? "  hidden" : " block animate__fadeIn"
                  }
                >
                  salse
                </span>
              </a>
              <ReactTooltip />
            </div>
            <div
              className={
                "px-3 py-3 flex mt-4  items-center bg-gray-900 bg-opacity-25" +
                (props.sidebar ? " justify-center" : " justify-start")
              }
            >
              {!props.sidebar && (
                <h3 className="font-bold text-white animate__fadeIn">
                  quick links
                </h3>
              )}
              {props.sidebar && (
                <GoDashboard className="text-2xl font-semibold text-white" />
              )}
            </div>
            <div className="px-2 pt-2 space-y-4">
              <a
                className={
                  "bg-gray-900 text-white group flex items-center px-2  text-sm font-medium rounded-md" +
                  (props.sidebar ? " flex-col py-3" : " flex-row py-2")
                }
                onClick={(e) => {
                  e.preventDefault();
                  props.setOpenTab(4);
                }}
                data-toggle="tab"
                href="/link4"
                role="tablist"
                data-tip-disable={props.sidebar ? "false" : "true"}
                data-tip="add movie"
              >
                <AiOutlineVideoCameraAdd
                  className={"text-2xl " + (props.sidebar ? " mr-0" : " mr-2")}
                />
                <span
                  className={
                    props.sidebar ? "  hidden" : " block animate__fadeIn"
                  }
                >
                  add movie
                </span>
              </a>
              <ReactTooltip />
              <a
                onClick={(e) => {
                  e.preventDefault();
                  props.setOpenTab(5);
                }}
                data-toggle="tab"
                href="/link5"
                role="tablist"
                data-tip-disable={props.sidebar ? "false" : "true"}
                data-tip="add user"
                className={
                  "bg-gray-900 text-white group flex items-center px-2  text-sm font-medium rounded-md" +
                  (props.sidebar ? " flex-col py-3" : " flex-row py-2")
                }
              >
                <AiOutlineUserAdd
                  className={"text-2xl " + (props.sidebar ? " mr-0" : " mr-2")}
                />
                <span
                  className={
                    props.sidebar ? "  hidden" : " block animate__fadeIn"
                  }
                >
                  add user
                </span>
              </a>
              <ReactTooltip />
              <a
                onClick={(e) => {
                  e.preventDefault();
                  props.setOpenTab(6);
                }}
                data-toggle="tab"
                href="/link6"
                role="tablist"
                data-tip-disable={props.sidebar ? "false" : "true"}
                data-tip="movies"
                className={
                  "bg-gray-900 text-white group flex items-center px-2  text-sm font-medium rounded-md" +
                  (props.sidebar ? " flex-col py-3" : " flex-row py-2")
                }
              >
                <AiOutlinePlayCircle
                  className={"text-2xl " + (props.sidebar ? " mr-0" : " mr-2 ")}
                />
                <span
                  className={
                    props.sidebar ? "  hidden" : " block animate__fadeIn"
                  }
                >
                  movies
                </span>
              </a>
              <ReactTooltip />
              <a
                onClick={(e) => {
                  e.preventDefault();
                  props.setOpenTab(7);
                }}
                data-toggle="tab"
                href="/link7"
                role="tablist"
                data-tip-disable={props.sidebar ? "false" : "true"}
                data-tip="users"
                className={
                  "bg-gray-900 text-white group flex items-center px-2  text-sm font-medium rounded-md" +
                  (props.sidebar ? " flex-col py-3" : " flex-row py-2")
                }
              >
                <AiOutlineUser
                  className={"text-2xl " + (props.sidebar ? " mr-0" : " mr-2")}
                />
                <span
                  className={
                    props.sidebar ? "  hidden" : " block animate__fadeIn"
                  }
                >
                  users
                </span>
              </a>
              <ReactTooltip />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
