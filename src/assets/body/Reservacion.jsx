import { useState, useEffect } from "react";
import React from "react";
import MainHeader from "../header/MainHeader";
import {
  onSnapshot,
  collection,
  addDoc,
  doc,
  deleteDoc,
  setDoc
} from 'firebase/firestore'
import { db } from "../firebase/Database";


const Form = () => {
  const [cliente, setCliente] = useState([]);
  const [form, setForm] = useState({
    nombre: '',
    numeroT: '',
    fechaR: '',
    personas: 0,
  });

  const getData = () => {
    onSnapshot(collection(db, 'comensales'), (snapshot) => {
      const arrData = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setCliente(arrData);
    });
  };

  const sendData = () => {
    if (form.nombre && form.numeroT && form.fechaR && form.personas) {
      addDoc(collection(db, 'comensales'), form);
      setForm({
        nombre: '',
        numeroT: '',
        fechaR: '',
        personas: 0,
      });
    } else {
      alert('COMPLETA EL FORMULARIO');
    }
  };

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const deleteDoc = async (id) => {
    await deleteDoc(doc(db, 'comensales', id));
    getData();
  };
  
  const editDoc = async (id) => {
    await editDoc(doc(db, 'comensales', id));
    getData();
  };

  useEffect(() => {
    getData();
  }, []);


  return (
    <div className="reservacion">
<MainHeader></MainHeader>
  
    <div className="formBox">
      <div className="value">
        <form name="form">
          <h2>Datos del comensal</h2>
          <div className="input">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={form.nombre}
              onChange={handleChange}
            />
          </div>
          <div className="input">
            <input
              type="text"
              name="numeroT"
              placeholder="Numero de telefono"
              value={form.numeroT}
              onChange={handleChange}
            />
          </div>
          <div className="input">
            <input
              type="date"
              name="fechaR"
              placeholder="Fecha"
              value={form.fechaR}
              onChange={handleChange}
            />
          </div>
          <div className="input">
            <input
              type="number"
              name="personas"
              placeholder="#  de Personas"
              value={form.personas}
              onChange={handleChange}
            />
          </div>
          <button className="botonForm" type="button" onClick={sendData}>
            enviar
          </button>
        </form>
      </div>
      
      
    </div>
    {cliente.map((item) => (
    <div className="card w-25"  key={item.id}>
      <div className="card-body">
        <h5 className="card-title">{item.nombre}</h5>
        <p className="card-text">{item.fechaR}</p>
        <p className="card-text">{item.numeroT}</p>
        <p className="card-text">{item.personas}</p>
        <button onClick={() => deleteDoc(item.id)}>Eliminar</button>
        <button onClick={() => editdoc(item.id)}>Editar</button>
      </div>
    </div>
    
    ))}
    </div>
    );
};



export default Form;