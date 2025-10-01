import React, { useState, useRef, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './AgendaDropdown.css'; // Estilos personalizados

const AgendaDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(prev => !prev);

  const handleDateChange = date => {
    setSelectedDate(date);
    setIsOpen(false); // Cierra el dropdown al seleccionar
  };

  // Cierra el dropdown si se hace clic fuera
  useEffect(() => {
    const handleClickOutside = e => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="agenda-container" ref={dropdownRef}>
      <button className="agenda-button" onClick={toggleDropdown}>
        {selectedDate.toLocaleDateString()}
      </button>

      {isOpen && (
        <div className="agenda-dropdown">
          <Calendar onChange={handleDateChange} value={selectedDate} />
        </div>
      )}
    </div>
  );
};

export default AgendaDropdown;