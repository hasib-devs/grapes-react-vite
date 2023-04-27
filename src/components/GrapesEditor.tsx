import grapesjs from "grapesjs";
import { useEffect } from "react";

import "grapesjs/dist/css/grapes.min.css";
import "../styles/grapesjs.scss";
import MiniBarIcon from "../icons/MiniBarIcon";
import PlusRoundedIcon from "../icons/PlusRoundedIcon";
import LayersIcon from "../icons/LayersIcon";
import BrushIcon from "../icons/BrushIcon";

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
            <div className="minibar_middle"></div>
            <div className="minibar_bottom"></div>
          </div>
          <div className="collapsable"></div>
        </div>
        <div id="gjs" className="flex-1 h-full"></div>
      </div>
    </div>
  );
};

export default GrapesEditor;
