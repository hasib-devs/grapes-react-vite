import { useState, FormEvent, useEffect } from "react";
import axios from "../plugins/axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Home = () => {
  const [pageName, setPageName] = useState("");
  const [pages, setPages] = useState({ data: [] });

  useEffect(() => {
    const fetchPages = async () => {
      try {
        const res = await axios.get("/pages");
        setPages(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPages();
  }, []);

  const savePage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post("/pages", { data: { name: pageName } });
      setPageName("");
      toast.success("Created Successfully");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
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
          <div className="mt-10">
            <h1 className="text-3xl mb-5">Page List</h1>

            <table className="w-full text-left">
              <thead className="">
                <tr>
                  <th>Page Name</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {pages.data.map((page: any) => (
                  <tr key={page.id}>
                    <td>{page.attributes.name}</td>
                    <td>
                      <Link to={`/editor/${page.id}`}>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-2 rounded ">
                          Editor
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
