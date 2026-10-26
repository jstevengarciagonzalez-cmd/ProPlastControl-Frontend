import React, { useState } from 'react';

// Componente FormularioInsumo: Maneja la entrada de datos para registrar materia prima
const FormularioInsumo = ({ agregarInsumo }) => {
  // Estados locales para los campos del formulario
  const [nombre, setNombre] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [unidad, setUnidad] = useState('Kg');

  // Manejador del envio del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validacion basica
    if (!nombre.trim() || !cantidad) {
      alert('Por favor complete todos los campos obligatorios.');
      return;
    }

    // Objeto con la estructura de la materia prima
    const nuevoInsumo = {
      id: Date.now(),
      nombre,
      cantidad: parseFloat(cantidad),
      unidad
    };

    // Registrar e insumo y limpiar el formulario
    agregarInsumo(nuevoInsumo);
    setNombre('');
    setCantidad('');
    setUnidad('Kg');
  };

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-header bg-dark text-white">
        <h5 className="mb-0">Registrar Nuevo Insumo</h5>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-5">
              <label className="form-label">Nombre del Insumo</label>
              <input
                type="text"
                className="form-control"
                placeholder="Ej. Polietileno Tereftalato (PET)"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Cantidad Inicial</label>
              <input
                type="number"
                className="form-control"
                placeholder="0.00"
                value={cantidad}
                onChange={(e) => setCantidad(e.target.value)}
              />
            </div>
            <div className="col-md-3">
              <label className="form-label">Unidad de Medida</label>
              <select
                className="form-select"
                value={unidad}
                onChange={(e) => setUnidad(e.target.value)}
              >
                <option value="Kg">Kilogramos (Kg)</option>
                <option value="Tons">Toneladas (Tons)</option>
                <option value="Unidades">Unidades</option>
              </select>
            </div>
          </div>
          <button type="submit" className="btn btn-success mt-3 w-100">
            Guardar Insumo en Inventario
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormularioInsumo;