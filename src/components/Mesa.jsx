import React from "react";

const Mesa = React.memo(({ numero, onAbrir }) => {
  return (
    <div className="bg-zinc-800 p-4 rounded-xl shadow-md">
      <h2 className="text-white text-lg mb-3">Mesa {numero}</h2>

      <button
        onClick={() => onAbrir(numero)}
        className="bg-green-600 hover:bg-green-700 text-black font-bold py-2 px-4 rounded w-full"
      >
        Abrir Mesa
      </button>
    </div>
  );
});

export default Mesa;
