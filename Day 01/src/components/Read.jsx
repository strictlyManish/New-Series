function Read(props) {
  const { todos, setTodos } = props;
  return (
    <ol className="w-[50vh] mt-2">
      {todos.map((item, idx) => (
        <li
          key={idx}
          className="bg-gray-500/40 backdrop-blur-3xl w-full p-3 mt-2 rounded-2xl shadow-lg"
        >
          <p className="font-semibold">{item.name}</p>
          <div className="flex items-end justify-end gap-2 mt-2">
            <button className="bg-gray-500/70 hover:bg-gray-700 text-white rounded-2xl px-5 py-1">
              Delete
            </button>
            <button className="bg-green-800/70 hover:bg-green-800 text-white rounded-2xl px-5 py-1">
              Edit
            </button>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default Read;
