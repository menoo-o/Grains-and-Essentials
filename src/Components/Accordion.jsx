import React, { useState, useRef, useEffect } from 'react';
import '../App.css';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null); // Reference to the content section for calculating height

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <button className="accordion-title" onClick={toggleAccordion}>
        {title}
        <span className="accordion-icon">{isOpen ? '-' : '+'}</span>
      </button>
      <div
        className="accordion-content"
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : '0px',
          transition: 'max-height 0.5s ease',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
