import Mesa from "../components/Mesa"

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        🍺 Sistema de Gestión de Bar
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 10 }, (_, i) => (
          <Mesa key={i + 1} id={i + 1} />
        ))}
      </div>
    </div>
  )
}
