import React from 'react';

// Componente InsumoItem: Representa una fila individual en la lista de insumos
const InsumoItem = ({ insumo, eliminarInsumo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <strong className="text-primary">{insumo.nombre}</strong>
        <span className="text-muted ms-2">
          ({insumo.cantidad} {insumo.unidad})
        </span>
      </div>
      <button
        className="btn btn-outline-danger btn-sm"
        onClick={() => eliminarInsumo(insumo.id)}
      >
        Eliminar
      </button>
    </li>
  );
};

export default InsumoItem;