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
import SearchIcon from "../icons/SearchIcon";
import UndoIcon from "../icons/UndoIcon";
import RedoIcon from "../icons/RedoIcon";
import PreviewIcon from "../icons/PreviewIcon";
import CavetDownIcon from "../icons/CavetDownIcon";
import ArrowDown from "../icons/ArrowDown";
import { useEditorContext } from "../contexts/EditorContext";

const GrapesEditor = () => {
  const { editor } = useEditorContext();

  return (
    <div className="grapes-editor">
      <div className="flex h-screen">
        <div className="w-[350px] flex">
          <div className="w-[60px] h-full flex flex-col justify-between items-center bg-[#1a232d]">
            <div className="minibar_top">
              <ul className="">
                <li className="py-4 my-2 cursor-pointer flex justify-center items-center border-b border-gray-700">
                  <MiniBarIcon />
                </li>
                <li className="py-4 my-2 cursor-pointer flex justify-center items-center border-b border-gray-700">
                  <PlusRoundedIcon />
                </li>
                <li className="py-4 my-2 cursor-pointer flex justify-center items-center border-b border-gray-700">
                  <LayersIcon />
                </li>
                <li className="py-4 my-2 cursor-pointer flex justify-center items-center border-b border-gray-700">
                  <BrushIcon />
                </li>
              </ul>
            </div>
            <div className="minibar_middle">
              <DokanIcon />
            </div>
            <div className="minibar_bottom">
              <ul className="">
                <li className="py-4 my-2 cursor-pointer flex justify-center items-center border-b border-gray-700">
                  <LockIcon />
                </li>

                <li className="py-4 my-2 cursor-pointer flex justify-center items-center border-b border-gray-700">
                  <RevertIcon />
                </li>

                <li className="py-4 my-2 cursor-pointer flex justify-center items-center border-b border-gray-700">
                  <MonitorIcon />
                </li>

                <li className="py-4 my-2 cursor-pointer flex justify-center items-center">
                  <SettingsIcon />
                </li>
              </ul>
            </div>
          </div>
          {/* Collapsable */}
          <div className="flex flex-col w-full bg-[#f2f2f5]">
            {/* Logo */}
            <div className="bg-white p-6 flex justify-center items-end mr-0.5">
              <LogoIcon />
              <span className="text-xs text-gray-400 ml-2 -mb-[0.2rem] tracking-widest">
                BUILDER
              </span>
            </div>

            {/* Search */}
            <div>
              <form className="flex bg-white mx-2 mt-3 items-center rounded-lg py-2.5 px-4">
                <SearchIcon />
                <input
                  type="text"
                  placeholder="Search Widget"
                  className="flex-grow focus:outline-none pl-3"
                />
              </form>
            </div>

            {/* Blocks */}
            <div className="flex-grow">
              <div className="flex justify-between items-center px-[0.6rem] mt-3">
                <p>Basic</p>
                <ArrowDown />
              </div>
              <div id="blocks"></div>
            </div>

            {/* Footer - Undo, Redo, Save */}
            <div className="bg-white px-5 py-2.5">
              <ul className="flex justify-between items-center">
                <li
                  onClick={() => editor?.runCommand("core:undo")}
                  className="cursor-pointer"
                >
                  <UndoIcon />
                </li>
                <li
                  onClick={() => editor?.runCommand("core:redo")}
                  className="cursor-pointer"
                >
                  <RedoIcon />
                </li>
                <li
                  onClick={() => editor?.runCommand("preview")}
                  className="cursor-pointer"
                >
                  <PreviewIcon />
                </li>
                <li>
                  <button className="px-5 py-2.5 rounded-full text-white text-sm bg-[#7047eb] flex items-center">
                    Save
                    <span className="w-[1px] h-[13px] bg-[#a991f3] mx-3"></span>
                    <CavetDownIcon />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Fream Body */}
        <div id="gjs" className="flex-1 h-full"></div>
      </div>
    </div>
  );
};

export default GrapesEditor;
