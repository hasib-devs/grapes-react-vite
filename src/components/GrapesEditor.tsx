import grapesjs from "grapesjs";
import { useEffect } from "react";

import "grapesjs/dist/css/grapes.min.css";
import "../styles/grapesjs.scss";
import MiniBarIcon from "../icons/MiniBarIcon";
import PlusRoundedIcon from "../icons/PlusRoundedIcon";
import LayersIcon from "../icons/LayersIcon";
import BrushIcon from "../icons/BrushIcon";
import DokanIcon from "../icons/DokanIcon";
import LockIcon from "../icons/LockIcon";
import RevertIcon from "../icons/RevertIcon";
import MonitorIcon from "../icons/MonitorIcon";
import SettingsIcon from "../icons/SettingsIcon";
import LogoIcon from "../icons/LogoIcon";

const GrapesEditor = () => {
  useEffect(() => {
    const editor = grapesjs.init({
      // Indicate where to init the editor. You can also pass an HTMLElement
      container: "#gjs",
      // Get the content for the canvas directly from the element
      // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
      fromElement: true,
      // Size of the editor
      height: "100vh",
      width: "100%",
      // Disable the storage manager for the moment
      storageManager: false,
      // Avoid any default panel
      panels: { defaults: [] },
    });
  }, []);

  return (
    <div className="grapes-editor">
      <div className="flex h-screen">
        <div className="sidebar">
          <div className="minibar">
            <div className="minibar_top">
              <ul className="">
                <li className="py-4 my-3 cursor-pointer flex justify-center items-center">
                  <MiniBarIcon />
                </li>
                <li className="py-4 my-3 cursor-pointer flex justify-center items-center">
                  <PlusRoundedIcon />
                </li>
                <li className="py-4 my-3 cursor-pointer flex justify-center items-center">
                  <LayersIcon />
                </li>
                <li className="py-4 my-3 cursor-pointer flex justify-center items-center">
                  <BrushIcon />
                </li>
              </ul>
            </div>
            <div className="minibar_middle">
              <DokanIcon />
            </div>
            <div className="minibar_bottom">
              <ul className="">
                <li className="py-4 my-3 cursor-pointer flex justify-center items-center">
                  <LockIcon />
                </li>

                <li className="py-4 my-3 cursor-pointer flex justify-center items-center">
                  <RevertIcon />
                </li>

                <li className="py-4 my-3 cursor-pointer flex justify-center items-center">
                  <MonitorIcon />
                </li>

                <li className="py-4 my-3 cursor-pointer flex justify-center items-center">
                  <SettingsIcon />
                </li>
              </ul>
            </div>
          </div>
          <div className="collapsable">
            {/* Logo */}
            <div className="bg-white p-6 flex justify-center items-end mr-0.5">
              <LogoIcon />
              <span className="text-xs text-gray-400 ml-2 -mb-[0.2rem] tracking-widest">
                BUILDER
              </span>
            </div>
          </div>
        </div>
        <div id="gjs" className="flex-1 h-full"></div>
      </div>
    </div>
  );
};

export default GrapesEditor;
