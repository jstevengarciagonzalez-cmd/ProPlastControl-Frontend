import React from 'react';
import InsumoItem from './InsumoItem';

// Componente ListaInsumos: Renderiza el listado completo de materias primas
const ListaInsumos = ({ insumos, eliminarInsumo }) => {
  if (insumos.length === 0) {
    return (
      <div className="alert alert-info text-center" role="alert">
        No hay insumos registrados en el inventario.
      </div>
    );
  }

  return (
    <div className="card shadow-sm">
      <div className="card-header bg-secondary text-white">
        <h5 className="mb-0">Inventario Actual</h5>
      </div>
      <ul className="list-group list-group-flush">
        {insumos.map((insumo) => (
          <InsumoItem
            key={insumo.id}
            insumo={insumo}
            eliminarInsumo={eliminarInsumo}
          />
        ))}
      </ul>
    </div>
  );
};

export default ListaInsumos;