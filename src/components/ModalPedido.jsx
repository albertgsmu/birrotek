import { menu } from "../data/menu";

export default function ModalPedido({ mesa, onCerrar }) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl w-80">
        <h2 className="text-xl font-bold mb-4">
          Pedido Mesa {mesa}
        </h2>

        {menu.map(item => (
          <div
            key={item.id}
            className="flex justify-between mb-2"
          >
            <span>{item.nombre}</span>
            <span>${item.precio}</span>
          </div>
        ))}

        <button
          onClick={onCerrar}
          className="mt-4 bg-red-500 text-white py-2 px-4 rounded w-full"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}

