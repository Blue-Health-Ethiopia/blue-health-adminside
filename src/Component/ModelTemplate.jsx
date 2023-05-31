import React, { useState, useEffect } from 'react';

const ModelTemplate = ({ isOpen, onClose, children }) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    setIsClosing(false);
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setIsClosing(false);
  };
  return (
    <div>
      <div>
        {isOpen && (
          <div
            className={`fixed z-40 top-0 left-0 w-full h-full bg-bgtransparent opacity-100 flex justify-center items-center transition-opacity ${
              isClosing ? 'opacity-0' : 'opacity-100'
            }`}
            onClick={handleClose}
          >
            <div
              className={`bg-white p-4 transform transition-transform ${
                isClosing ? 'scale-90 opacity-0' : 'scale-100 opacity-100'
              }`}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              {children}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModelTemplate;
