import { useEffect, useState } from "react";

const STORAGE_KEY = "bar_app_data";
const ADMIN_PASSWORD = "12345";

const MENU = [
  // CERVEZAS
  { id: 1, nombre: "Poker", precio: 3500, categoria: "Cervezas" },
  { id: 2, nombre: "Aguila", precio: 3500, categoria: "Cervezas" },
  { id: 3, nombre: "Aguila Light", precio: 4000, categoria: "Cervezas" },
  { id: 4, nombre: "Budweiser", precio: 3000, categoria: "Cervezas" },
  { id: 5, nombre: "Club Colombia", precio: 4000, categoria: "Cervezas" },
  
  { id: 6, nombre: "Reds", precio: 4000, categoria: "Cervezas" },
  { id: 7, nombre: "Coronita", precio: 5000, categoria: "Cervezas" },
  { id: 8, nombre: "Corona", precio: 9000, categoria: "Cervezas" },
  { id: 9, nombre: "Los Cuates", precio: 5000, categoria: "Cervezas" },
  { id: 10, nombre: "Cuates Preparado", precio: 9000, categoria: "Cervezas" },
  { id: 11, nombre: "Likee", precio: 5000, categoria: "Cervezas" },
  
  // COCTELES
  { id: 12, nombre: "Mojito Cubano", precio: 15000, categoria: "Cocteles" },
  { id: 13, nombre: "Cuba Libre", precio: 15000, categoria: "Cocteles" },
  { id: 14, nombre: "Orgasmo", precio: 18000, categoria: "Cocteles" },
  { id: 15, nombre: "Fresqueñita", precio: 16000, categoria: "Cocteles" },
  { id: 16, nombre: "Beso de Medianoche", precio: 18000, categoria: "Cocteles" },
  { id: 17, nombre: "Margarita", precio: 15000, categoria: "Cocteles" },
  { id: 18, nombre: "Margarita Frozen", precio: 17000, categoria: "Cocteles" },
  { id: 19, nombre: "Cabeza de Jabali", precio: 25000, categoria: "Cocteles" },
  { id: 20, nombre: "Gin Tonic (Fresa y Menta)", precio: 16000, categoria: "Cocteles" },
  { id: 21, nombre: "Gin Tonic (Limon y Pepino)", precio: 16000, categoria: "Cocteles" },
  { id: 22, nombre: "Caribe Azul", precio: 18000, categoria: "Cocteles" },
  { id: 23, nombre: "Fuego Dulce", precio: 19000, categoria: "Cocteles" },
  { id: 24, nombre: "La Pikabirra", precio: 18000, categoria: "Cocteles" },
  
  // BOTELLAS Y MEDIAS
  { id: 25, nombre: "Aguard. Antioqueño Bot", precio: 90000, categoria: "Botellas" },
  { id: 26, nombre: "Aguard. Nectar Azul Bot", precio: 90000, categoria: "Botellas" },
  { id: 27, nombre: "Aguard. Nectar Dorado Bot", precio: 80000, categoria: "Botellas" },
  { id: 28, nombre: "Aguardiente Amarillo Bot", precio: 90000, categoria: "Botellas" },
  { id: 29, nombre: "½ Aguard. Antioqueño", precio: 50000, categoria: "Medias" },
  { id: 30, nombre: "½ Aguard. Amarillo", precio: 50000, categoria: "Medias" },
  { id: 31, nombre: "½ Aguard. Nectar Dorado", precio: 45000, categoria: "Medias" },
  { id: 32, nombre: "½ Aguard. Nectar Verde", precio: 45000, categoria: "Medias" },
  { id: 33, nombre: "Ron Viejo de Caldas Bot", precio: 90000, categoria: "Botellas" },
  { id: 34, nombre: "½ Ron Viejo de Caldas", precio: 45000, categoria: "Medias" },
  { id: 35, nombre: "Wiskey Chivas 12 Años", precio: 170000, categoria: "Botellas" },
  { id: 36, nombre: "Wiskey Buchanna's 12 Años", precio: 170000, categoria: "Botellas" },
  { id: 37, nombre: "Wiskey Something Special", precio: 100000, categoria: "Botellas" },
  
  // TRAGOS
  { id: 38, nombre: "Wiskey Cocteleria", precio: 8000, categoria: "Tragos" },
  { id: 39, nombre: "Wiskey Premium", precio: 16000, categoria: "Tragos" },
  { id: 40, nombre: "Ginebra", precio: 8000, categoria: "Tragos" },
  { id: 41, nombre: "Tequila", precio: 8000, categoria: "Tragos" },
  { id: 42, nombre: "Tequila Tablazo", precio: 12000, categoria: "Tragos" },
  { id: 43, nombre: "Crema de Wiskey", precio: 8000, categoria: "Tragos" },
  
  // BEBIDAS SIN ALCOHOL
  { id: 44, nombre: "Limonada de Coco", precio: 8000, categoria: "Sin Alcohol" },
  { id: 45, nombre: "Limonada Cerezada", precio: 8000, categoria: "Sin Alcohol" },
  { id: 46, nombre: "Limonada Hierbabuena", precio: 7000, categoria: "Sin Alcohol" },
  { id: 47, nombre: "Mojito Fresa", precio: 12000, categoria: "Sin Alcohol" },
  { id: 48, nombre: "Beso de Angel", precio: 12000, categoria: "Sin Alcohol" },
  { id: 49, nombre: "Gaseosa Artesanal", precio: 9000, categoria: "Sin Alcohol" },
  { id: 50, nombre: "Cola y Pola", precio: 4000, categoria: "Sin Alcohol" },
  { id: 51, nombre: "Gatorade", precio: 5000, categoria: "Sin Alcohol" },
  { id: 52, nombre: "Agua", precio: 2500, categoria: "Sin Alcohol" },
  { id: 53, nombre: "Agua Pequeña", precio: 1500, categoria: "Sin Alcohol" },
  { id: 54, nombre: "Coca Cola", precio: 3000, categoria: "Sin Alcohol" },
  
  // CIGARRILLOS
  { id: 55, nombre: "Mustang Und", precio: 1000, categoria: "Cigarrillos" },
  { id: 56, nombre: "Lucky Und", precio: 1000, categoria: "Cigarrillos" },
  { id: 57, nombre: "Malboro Und", precio: 1000, categoria: "Cigarrillos" },
  { id: 58, nombre: "Mustang 1/2", precio: 9000, categoria: "Cigarrillos" },
  { id: 59, nombre: "Lucky 1/2", precio: 9000, categoria: "Cigarrillos" },
  { id: 60, nombre: "Malboro 1/2", precio: 10000, categoria: "Cigarrillos" },
];

const CATEGORIAS = ["Cervezas", "Cocteles", "Botellas", "Medias", "Tragos", "Sin Alcohol", "Cigarrillos"];

function cargarStorage() {
  try {
    const data = window.storage ? null : localStorage.getItem(STORAGE_KEY);
    if (!data) return { pedidos: {}, mesaActiva: null, ventas: [] };
    return JSON.parse(data);
  } catch {
    return { pedidos: {}, mesaActiva: null, ventas: [] };
  }
}

export default function App() {
  const guardado = cargarStorage();
  const [pedidos, setPedidos] = useState(guardado.pedidos);
  const [mesaActiva, setMesaActiva] = useState(guardado.mesaActiva);
  const [factura, setFactura] = useState(null);
  const [ventas, setVentas] = useState(guardado.ventas);
  const [verFinanzas, setVerFinanzas] = useState(false);
  const [password, setPassword] = useState("");
  const [ventaRapida, setVentaRapida] = useState(false);
  const [carritoRapido, setCarritoRapido] = useState([]);
  const [calculadora, setCalculadora] = useState("");
  const [mostrarCalc, setMostrarCalc] = useState(false);
  const [categoriaActiva, setCategoriaActiva] = useState("Cervezas");

  useEffect(() => {
    if (!window.storage) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ pedidos, mesaActiva, ventas }));
    }
  }, [pedidos, mesaActiva, ventas]);

  const abrirMesa = (mesa) => {
    setMesaActiva(mesa);
    if (!pedidos[mesa]) setPedidos({ ...pedidos, [mesa]: [] });
  };

  const volverInicio = () => {
    setMesaActiva(null);
    setFactura(null);
    setCategoriaActiva("Cervezas");
  };

  const agregarProducto = (producto) => {
    setPedidos((prev) => {
      const lista = prev[mesaActiva] || [];
      const existe = lista.find((p) => p.id === producto.id);
      const nueva = existe
        ? lista.map((p) => (p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p))
        : [...lista, { ...producto, cantidad: 1 }];
      return { ...prev, [mesaActiva]: nueva };
    });
  };

  const cambiarCantidad = (id, delta) => {
    setPedidos((prev) => ({
      ...prev,
      [mesaActiva]: prev[mesaActiva]
        .map((p) => (p.id === id ? { ...p, cantidad: p.cantidad + delta } : p))
        .filter((p) => p.cantidad > 0),
    }));
  };

  const totalMesa = () => (pedidos[mesaActiva] || []).reduce((s, p) => s + p.precio * p.cantidad, 0);

  const cerrarMesa = () => {
    setFactura({ mesa: mesaActiva, items: pedidos[mesaActiva], total: totalMesa() });
  };

  const confirmarFactura = () => {
    setVentas((v) => [...v, { total: factura.total, fecha: new Date().toISOString() }]);
    setPedidos((p) => ({ ...p, [factura.mesa]: [] }));
    volverInicio();
  };

  const hoy = new Date();
  const totalHoy = ventas.filter((v) => new Date(v.fecha).toDateString() === hoy.toDateString()).reduce((s, v) => s + v.total, 0);
  const totalSemana = ventas.filter((v) => {
    const f = new Date(v.fecha);
    const i = new Date(hoy);
    i.setDate(hoy.getDate() - hoy.getDay());
    return f >= i;
  }).reduce((s, v) => s + v.total, 0);
  const totalMes = ventas.filter((v) => {
    const f = new Date(v.fecha);
    return f.getMonth() === hoy.getMonth() && f.getFullYear() === hoy.getFullYear();
  }).reduce((s, v) => s + v.total, 0);

  const borrarFinanzas = () => {
    if (password !== ADMIN_PASSWORD) {
      alert("Contraseña incorrecta");
      return;
    }
    setVentas([]);
    setPassword("");
  };

  const agregarRapido = (p) => {
    const existe = carritoRapido.find((x) => x.id === p.id);
    setCarritoRapido(
      existe
        ? carritoRapido.map((x) => (x.id === p.id ? { ...x, cantidad: x.cantidad + 1 } : x))
        : [...carritoRapido, { ...p, cantidad: 1 }]
    );
  };

  const totalRapido = carritoRapido.reduce((s, p) => s + p.precio * p.cantidad, 0);

  const confirmarVentaRapida = () => {
    if (!carritoRapido.length) return;
    setVentas((v) => [...v, { total: totalRapido, fecha: new Date().toISOString() }]);
    setCarritoRapido([]);
    setVentaRapida(false);
  };

  const agregarNumero = (num) => setCalculadora(calculadora + num);
  const borrarCalc = () => setCalculadora(calculadora.slice(0, -1));
  const limpiarCalc = () => setCalculadora("");

  const aceptarVentaCalc = () => {
    const monto = parseFloat(calculadora);
    if (isNaN(monto) || monto <= 0) {
      alert("Ingresa un monto válido");
      return;
    }
    setVentas((v) => [...v, { total: monto, fecha: new Date().toISOString() }]);
    setCalculadora("");
    setMostrarCalc(false);
    alert(`Venta de $${monto} registrada`);
  };

  if (verFinanzas) {
    return (
      <div>
        <h1>Finanzas</h1>
        <div>
          <div>HOY</div>
          <div>${totalHoy.toLocaleString()}</div>
        </div>
        <div>
          <div>SEMANA</div>
          <div>${totalSemana.toLocaleString()}</div>
        </div>
        <div>
          <div>MES</div>
          <div>${totalMes.toLocaleString()}</div>
        </div>
        <input
          type="password"
          placeholder="Contraseña admin"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={borrarFinanzas}>Borrar Finanzas</button>
        <button onClick={() => setVerFinanzas(false)}>Volver</button>
      </div>
    );
  }

  if (mostrarCalc) {
    return (
      <div>
        <button onClick={() => setMostrarCalc(false)}>Volver</button>
        <h1>Calculadora</h1>
        <div style={{ fontSize: '2em', padding: '20px', textAlign: 'right', minHeight: '60px', border: '2px solid var(--neon-cyan)', marginBottom: '15px' }}>
          {calculadora || "0"}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginBottom: '15px' }}>
          <button onClick={() => agregarNumero("7")}>7</button>
          <button onClick={() => agregarNumero("8")}>8</button>
          <button onClick={() => agregarNumero("9")}>9</button>
          <button onClick={() => agregarNumero("4")}>4</button>
          <button onClick={() => agregarNumero("5")}>5</button>
          <button onClick={() => agregarNumero("6")}>6</button>
          <button onClick={() => agregarNumero("1")}>1</button>
          <button onClick={() => agregarNumero("2")}>2</button>
          <button onClick={() => agregarNumero("3")}>3</button>
          <button onClick={limpiarCalc} style={{ background: 'rgba(255, 0, 110, 0.3)' }}>C</button>
          <button onClick={() => agregarNumero("0")}>0</button>
          <button onClick={borrarCalc} style={{ background: 'rgba(255, 69, 0, 0.3)' }}>⌫</button>
        </div>
        <button onClick={aceptarVentaCalc} style={{ width: '100%', background: 'rgba(0, 166, 81, 0.3)', borderColor: 'var(--neon-yellow)' }}>
          Aceptar Venta
        </button>
      </div>
    );
  }

  if (ventaRapida) {
    const productosCategoria = MENU.filter((p) => p.categoria === categoriaActiva);
    return (
      <div>
        <button onClick={() => setVentaRapida(false)}>Volver</button>
        <h1>Venta Rápida</h1>
        <button onClick={() => setMostrarCalc(true)}>Venta Manual</button>
        <div>
          {CATEGORIAS.map((cat) => (
            <button key={cat} onClick={() => setCategoriaActiva(cat)}>
              {cat}
            </button>
          ))}
        </div>
        <div>
          {productosCategoria.map((p) => (
            <button key={p.id} onClick={() => agregarRapido(p)}>
              <div>{p.nombre}</div>
              <div>${p.precio.toLocaleString()}</div>
            </button>
          ))}
        </div>
        <div>
          <div>TOTAL</div>
          <div>${totalRapido.toLocaleString()}</div>
        </div>
        <button onClick={confirmarVentaRapida}>Confirmar Venta</button>
      </div>
    );
  }

  if (factura) {
    return (
      <div>
        <h1>Mesa {factura.mesa}</h1>
        <div>
          {factura.items.map((item) => (
            <div key={item.id}>
              <div>{item.nombre}</div>
              <div>
                {item.cantidad} x ${item.precio.toLocaleString()} = ${(item.cantidad * item.precio).toLocaleString()}
              </div>
            </div>
          ))}
        </div>
        <div>
          <div>TOTAL A PAGAR</div>
          <div>${factura.total.toLocaleString()}</div>
        </div>
        <button onClick={confirmarFactura}>Confirmar Pago</button>
        <button onClick={() => setFactura(null)}>Volver</button>
      </div>
    );
  }

  if (mesaActiva) {
    const productosCategoria = MENU.filter((p) => p.categoria === categoriaActiva);
    const pedidoActual = pedidos[mesaActiva] || [];
    return (
      <div>
        <button onClick={volverInicio}>Volver</button>
        <h1>Mesa {mesaActiva}</h1>
        <div>
          {CATEGORIAS.map((cat) => (
            <button key={cat} onClick={() => setCategoriaActiva(cat)}>
              {cat}
            </button>
          ))}
        </div>
        <div>
          {productosCategoria.map((p) => (
            <button key={p.id} onClick={() => agregarProducto(p)}>
              <div>{p.nombre}</div>
              <div>${p.precio.toLocaleString()}</div>
            </button>
          ))}
        </div>
        {pedidoActual.length > 0 && (
          <div>
            <h3>PEDIDO ACTUAL:</h3>
            {pedidoActual.map((item) => (
              <div key={item.id}>
                <span>{item.nombre}</span>
                <div>
                  <button onClick={() => cambiarCantidad(item.id, -1)}>-</button>
                  <span>{item.cantidad}</span>
                  <button onClick={() => cambiarCantidad(item.id, 1)}>+</button>
                </div>
              </div>
            ))}
          </div>
        )}
        <div>
          <div>TOTAL</div>
          <div>${totalMesa().toLocaleString()}</div>
        </div>
        <button onClick={cerrarMesa}>Cerrar Mesa</button>
      </div>
    );
  }

  return (
    <div>
      <div>
        <h1>BIRROTEK</h1>
        <p>Eres quien lleva la contabilidad</p>   
      </div>
      <div>
        <button onClick={() => setVentaRapida(true)}>Venta Rápida</button>
        <button onClick={() => setVerFinanzas(true)}>Finanzas</button>
      </div>
      <h2>Mesas</h2>
      <div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((m) => {
          const tienePedido = pedidos[m] && pedidos[m].length > 0;
          return (
            <button key={m} onClick={() => abrirMesa(m)}>
              Mesa {m}
              {tienePedido && <div>• Activa</div>}
            </button>
          );
        })}
      </div>
    </div>
  );
}
