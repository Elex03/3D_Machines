import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const BotonAtras = () => {
  const navigate = useNavigate();

  const handleAtras = () => {
    navigate(-1); // pagina anterior
  };

  return (
    <div 
      onClick={handleAtras}
      style={{
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        padding: '1px',
        width:'50px'
      }}
    >
      <ArrowBackIcon style={{ fontSize: 30, marginLeft: 50}} />
      <span style={{ marginLeft: 5 }}>Atrás</span>
    </div>
  );
};

export default BotonAtras;
