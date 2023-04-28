import GrapesEditor from "../components/GrapesEditor";
import { EditorProvider } from "../contexts/EditorContext";

const Editor = () => {
  return (
    <>
      <EditorProvider>
        <GrapesEditor />
      </EditorProvider>
    </>
  );
};

export default Editor;
