import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function Read({ data, setData }) {
  const [editedId, setEditedId] = useState(null);
  const [editedText, setEditedText] = useState("");

  const deleteHandler = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const startEdit = (id, title) => {
    setEditedId(id);
    setEditedText(title);
  };

  const saveEdit = (id) => {
    setData(
      data.map((item) =>
        item.id === id ? { ...item, title: editedText } : item
      )
    );
    setEditedId(null);
    setEditedText("");
  };

  return (
    <div className="w-[25vw] transition-all h-[90vh] overflow-x-auto relative overflow-y-hidden">
      <p className="pb-3 sticky top-0 z-1 bg-pink-700 backdrop-blur-xl p-2 rounded-b-2xl italic uppercase font-medium">
        Pending Tasks
        <span className="absolute right-0 mr-1.5">Total : {data.length}</span>
      </p>

      <AnimatePresence>
        {data.map((obj) => (
          <motion.li
            key={obj.id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: 50, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-700 p-5 list-none rounded-md mt-2 relative"
          >
            <span className="text-[10px] absolute left-[90%] italic text-gray-400">
              {obj.id}
            </span>

            {editedId === obj.id ? (
              <input
                type="text"
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
                className="w-full p-2 rounded-md bg-gray-700 outline-none"
              />
            ) : (
              <p className="capitalize">{obj.title}</p>
            )}

            <div className="flex gap-2 mt-2 justify-end">
              <button
                onClick={() => deleteHandler(obj.id)}
                className="mt-2 bg-gray-800 px-5 py-1 rounded-full shadow-2xl cursor-pointer 
                         active:backdrop-blur-2xl transition-all"
              >
                Delete
              </button>

              {editedId === obj.id ? (
                <button
                  onClick={() => saveEdit(obj.id)}
                  className="mt-2 bg-green-600 px-5 py-1 rounded-full shadow-2xl cursor-pointer"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => startEdit(obj.id, obj.title)}
                  className="mt-2 bg-gray-800 px-5 py-1 rounded-full shadow-2xl cursor-pointer 
                           active:backdrop-blur-2xl transition-all"
                >
                  Edit
                </button>
              )}
            </div>
          </motion.li>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default Read;
