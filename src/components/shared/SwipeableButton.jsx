import React, { useState, useRef, useEffect } from 'react';

const SwipeableButton = ({ onSuccess, text = "SLIDE TO CONFIRM", startIcon: StartIcon, endIcon: EndIcon }) => {
  const [isActive, setIsActive] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(0);
  const containerRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      const sliderWidth = sliderRef.current.offsetWidth;
      const maxPosition = containerRect.width - sliderWidth - 8;
      const newPosition = Math.max(0, Math.min(e.clientX - containerRect.left, maxPosition));
      setSliderPosition(newPosition);

      if (newPosition >= maxPosition) {
        setIsActive(true);
        setIsDragging(false);
        onSuccess();
      }
    };

    const handleMouseUp = () => {
      if (isDragging && !isActive) {
        setSliderPosition(0); 
      }
      setIsDragging(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, isActive, onSuccess]);

  const handleMouseDown = () => {
    if (!isActive) {
      setIsDragging(true);
    }
  };

  return (
    <div 
      ref={containerRef} 
      className="relative w-64 h-12 bg-gray-200 rounded-full overflow-hidden cursor-pointer"
    >
      <div className="absolute inset-0 flex items-center justify-center text-gray-500">
        {text}
      </div>
      <div
        ref={sliderRef}
        className={`absolute top-1 left-1 w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors ${isActive ? 'bg-green-500' : 'bg-indigo-500'}`}
        style={{ transform: `translateX(${sliderPosition}px)` }}
        onMouseDown={handleMouseDown}
      >
        {isActive ? <EndIcon size={18} /> : <StartIcon size={18} />} 
      </div>
    </div>
  );
};

export default SwipeableButton;
