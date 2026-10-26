import React, { useState } from 'react';
import Header from './components/Header';
import FormularioInsumo from './components/FormularioInsumo';
import ListaInsumos from './components/ListaInsumos';

function App() {
  // Estado principal con insumos iniciales de prueba
  const [insumos, setInsumos] = useState([
    { id: 1, nombre: 'Polietileno de Alta Densidad (HDPE)', cantidad: 500, unidad: 'Kg' },
    { id: 2, nombre: 'Polipropileno (PP)', cantidad: 250, unidad: 'Kg' }
  ]);

  // Funcion para agregar un nuevo insumo al inventario
  const agregarInsumo = (nuevoInsumo) => {
    setInsumos([...insumos, nuevoInsumo]);
  };

  // Funcion para eliminar un insumo por su ID
  const eliminarInsumo = (id) => {
    setInsumos(insumos.filter((insumo) => insumo.id !== id));
  };

  return (
    <div className="container my-4" style={{ maxWidth: '800px' }}>
      <Header />
      <FormularioInsumo agregarInsumo={agregarInsumo} />
      <ListaInsumos insumos={insumos} eliminarInsumo={eliminarInsumo} />
    </div>
  );
}

export default App;