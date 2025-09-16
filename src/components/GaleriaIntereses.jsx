import React, { useState } from 'react';

function GaleriaIntereses({ intereses }) {
    const [selectedIntereses, setSelectedIntereses] = useState([]);
    
    function capturarClic(interes) {
      if (selectedIntereses.includes(interes)) {
        setSelectedIntereses(selectedIntereses.filter(i => i !== interes));
      } else {
        setSelectedIntereses([...selectedIntereses, interes]);
      }
    }
  
    return (
      <div className="galeria-intereses">
        {intereses && intereses.map((interes) => (
          <button
            key={interes} 
            className={`interes-boton ${selectedIntereses.includes(interes) ? 'selected' : ''}`}
            onClick={() => capturarClic(interes)}
            style={{
              backgroundColor: selectedIntereses.includes(interes) ? '#28a745' : '#f0f0f0',
              color: selectedIntereses.includes(interes) ? 'white' : 'black',
              padding: '10px 20px',
              margin: '5px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            {interes}
          </button>
        ))}
      </div>
    );
  }
  
  export default GaleriaIntereses;
