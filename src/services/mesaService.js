import { db } from "../firebase/firebase"
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore"

export const abrirMesa = async (id) => {
  await setDoc(doc(db, "mesas", id.toString()), {
    open: true,
    orders: [],
    total: 0
  })
}

export const agregarPedido = async (id, orders, total) => {
  await updateDoc(doc(db, "mesas", id.toString()), {
    orders,
    total
  })
}

export const cerrarMesa = async (id) => {
  await setDoc(doc(db, "mesas", id.toString()), {
    open: false,
    orders: [],
    total: 0
  })
}

export const obtenerMesa = async (id) => {
  const snap = await getDoc(doc(db, "mesas", id.toString()))
  return snap.exists() ? snap.data() : null
}
