import React from 'react';

const ErrorComponent: React.FC<{ message: string }> = ({ message }) => (
  <div className="error-message">
    <h2>Ocorreu um erro</h2>
    <p>{message}</p>
  </div>
);

export default ErrorComponent;
