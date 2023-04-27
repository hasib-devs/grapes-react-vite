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
import SearchIcon from "../icons/SearchIcon";
import UndoIcon from "../icons/UndoIcon";
import RedoIcon from "../icons/RedoIcon";
import PreviewIcon from "../icons/PreviewIcon";
import CavetDownIcon from "../icons/CavetDownIcon";

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
      blockManager: {
        appendTo: "#blocks",
        blocks: [
          {
            id: "text_block",
            label: `
                <svg class="icon" width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.33333 20H24.1733C25.0574 20 25.9052 19.6488 26.5304 19.0237C27.1555 18.3986 27.5067 17.5507 27.5067 16.6667V3.33333C27.5067 2.44928 27.1555 1.60142 26.5304 0.976298C25.9052 0.351177 25.0574 0 24.1733 0H3.33333C2.44928 0 1.60143 0.351177 0.976308 0.976298C0.351186 1.60142 0 2.44928 0 3.33333V16.6667C0 17.5507 0.351186 18.3986 0.976308 19.0237C1.60143 19.6488 2.44928 20 3.33333 20ZM1.91912 1.91911C2.29419 1.54404 2.8029 1.33333 3.33333 1.33333H24.1733C24.7038 1.33333 25.2125 1.54404 25.5875 1.91911C25.9626 2.29418 26.1733 2.8029 26.1733 3.33333V16.6667C26.1733 17.1971 25.9626 17.7058 25.5875 18.0809C25.2125 18.4559 24.7038 18.6667 24.1733 18.6667H3.33333C2.80398 18.6632 2.2973 18.4513 1.92298 18.077C1.54867 17.7027 1.33683 17.196 1.33333 16.6667V3.33333C1.33333 2.8029 1.54404 2.29418 1.91912 1.91911ZM5.52859 6.4714C5.65362 6.59642 5.82319 6.66667 6 6.66667H8.48V14C8.48 14.1768 8.55024 14.3464 8.67526 14.4714C8.80029 14.5964 8.96986 14.6667 9.14667 14.6667C9.32241 14.6633 9.49001 14.5919 9.6143 14.4676C9.73859 14.3433 9.80992 14.1757 9.81333 14V6.66667H12.1733C12.3501 6.66667 12.5197 6.59642 12.6447 6.4714C12.7698 6.34637 12.84 6.17681 12.84 6C12.84 5.82319 12.7698 5.65361 12.6447 5.52859C12.5197 5.40356 12.3501 5.33333 12.1733 5.33333H9.14667H6C5.82426 5.33675 5.65666 5.40808 5.53237 5.53237C5.40808 5.65666 5.33675 5.82426 5.33333 6C5.33333 6.17681 5.40357 6.34637 5.52859 6.4714ZM12.1953 10.4714C12.3203 10.5964 12.4899 10.6667 12.6667 10.6667H21.5067C21.6835 10.6667 21.853 10.5964 21.9781 10.4714C22.1031 10.3464 22.1733 10.1768 22.1733 10C22.1733 9.82319 22.1031 9.65361 21.9781 9.52859C21.853 9.40356 21.6835 9.33333 21.5067 9.33333H12.6667C12.4909 9.33675 12.3233 9.40808 12.199 9.53237C12.0747 9.65666 12.0034 9.82426 12 10C12 10.1768 12.0702 10.3464 12.1953 10.4714ZM15.3333 6.66667C15.1565 6.66667 14.987 6.59642 14.8619 6.4714C14.7369 6.34637 14.6667 6.17681 14.6667 6C14.6701 5.82426 14.7414 5.65666 14.8657 5.53237C14.99 5.40808 15.1576 5.33675 15.3333 5.33333H21.5067C21.6835 5.33333 21.853 5.40356 21.9781 5.52859C22.1031 5.65361 22.1733 5.82319 22.1733 6C22.1733 6.17681 22.1031 6.34637 21.9781 6.4714C21.853 6.59642 21.6835 6.66667 21.5067 6.66667H15.3333ZM12.1953 14.4714C12.3203 14.5964 12.4899 14.6667 12.6667 14.6667H21.5067C21.6835 14.6667 21.853 14.5964 21.9781 14.4714C22.1031 14.3464 22.1733 14.1768 22.1733 14C22.1733 13.8232 22.1031 13.6536 21.9781 13.5286C21.853 13.4036 21.6835 13.3333 21.5067 13.3333H12.6667C12.4909 13.3367 12.3233 13.4081 12.199 13.5324C12.0747 13.6567 12.0034 13.8243 12 14C12 14.1768 12.0702 14.3464 12.1953 14.4714Z" fill="#6C747A"/>
                </svg>
                <p class="label">Text Block</p>
                `,

            content: '<p data-gjs-type="text">Insert your text here</p>',
          },
          {
            id: "image_block",
            label: `
                <svg width="27" height="20" viewBox="0 0 27 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.34169 1.32714C2.23435 1.32714 1.33667 2.21841 1.33667 3.31785V12.5478L6.4331 7.5L14.6407 15.6294L20.1924 10.1174L25.33 15.1943V3.31785C25.33 2.21841 24.4323 1.32714 23.325 1.32714H3.34169ZM26.6658 16.7565C26.6664 16.7318 26.6667 16.707 26.6667 16.6821V3.31785C26.6667 1.48545 25.1705 0 23.325 0H3.34169C1.49612 0 0 1.48545 0 3.31785V14.1454C0 14.1455 0 14.1456 0 14.1457V16.6821C0 18.5145 1.49612 20 3.34169 20H23.325C25.1055 20 26.5608 18.6174 26.6611 16.8746C26.6662 16.8354 26.6678 16.7959 26.6658 16.7565ZM25.2993 17.0313L20.1946 11.987L14.6419 17.5L6.4331 9.36951L1.33667 14.4173V16.6821C1.33667 17.7816 2.23435 18.6729 3.34169 18.6729H23.325C24.3123 18.6729 25.133 17.9642 25.2993 17.0313ZM17.0833 5.46296C16.1884 5.46296 15.463 6.18843 15.463 7.08333C15.463 7.97824 16.1884 8.7037 17.0833 8.7037C17.9782 8.7037 18.7037 7.97824 18.7037 7.08333C18.7037 6.18843 17.9782 5.46296 17.0833 5.46296ZM14.1667 7.08333C14.1667 5.4725 15.4725 4.16667 17.0833 4.16667C18.6942 4.16667 20 5.4725 20 7.08333C20 8.69416 18.6942 10 17.0833 10C15.4725 10 14.1667 8.69416 14.1667 7.08333Z" fill="#6C747A"/>
                </svg>

                <p class="label">Image</p>
                `,

            select: true,
            content: { type: "image" },
            // This triggers `active` event on dropped components and the `image`
            // reacts by opening the AssetManager
            activate: true,
          },
        ],
      },
    });
  }, []);

  return (
    <div className="grapes-editor">
      <div className="flex h-screen">
        <div className="sidebar">
          <div className="minibar">
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
          <div className="collapsable flex flex-col">
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
            <div id="blocks" className="flex-grow"></div>

            {/* Footer - Undo, Redo, Save */}
            <div className="bg-white px-5 py-2.5">
              <ul className="flex justify-between items-center">
                <li>
                  <UndoIcon />
                </li>
                <li>
                  <RedoIcon />
                </li>
                <li>
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
