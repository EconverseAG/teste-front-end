import React from 'react';

const LoadingComponent: React.FC = () => (
  <div className="loading">
    <p>Carregando...</p>
    <div className="spinner"></div> {/* Estilize este elemento para uma animação */}
  </div>
);

export default LoadingComponent;