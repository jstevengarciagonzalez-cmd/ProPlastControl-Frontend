import React from 'react';

// Componente Header: Muestra la cabecera principal del modulo ProPlastControl
const Header = () => {
  return (
    <header className="bg-primary text-white text-center py-4 mb-4 shadow-sm rounded">
      <h1>ProPlastControl</h1>
      <p className="lead mb-0">Gestión de Inventario de Materia Prima</p>
    </header>
  );
};

export default Header;