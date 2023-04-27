import { useState, FormEvent } from "react";

const Home = () => {
  const [pageName, setPageName] = useState("");

  const savePage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("save page");
  };
  return (
    <>
      <div className="flex mt-10">
        <div className="w-1/2 mx-auto">
          {/* Create Page */}
          <h1 className="text-3xl">Create Page</h1>
          <form onSubmit={savePage} className="flex">
            <input
              className="border border-gray-400 w-full mt-2 p-2"
              placeholder="Page Name"
              value={pageName}
              onChange={(e) => setPageName(e.target.value)}
            />

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded rounded-l-none mt-2"
            >
              Create
            </button>
          </form>

          {/* Page List */}
          <div className="flex justify-between mt-10">
            <h1 className="text-3xl">Page List</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
