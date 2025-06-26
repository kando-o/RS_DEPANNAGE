import React, { useState, useRef, useEffect } from 'react';

const SwipeableButton = ({ onSuccess, text = "SLIDE TO CONFIRM", startIcon: StartIcon, endIcon: EndIcon }) => {
  const [isActive, setIsActive] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(0);
  const containerRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleMove = (e) => {
      if (!isDragging) return;

      const clientX = e.touches ? e.touches[0].clientX : e.clientX;

      // Prevent default touch behavior (only while dragging)
      if (e.touches) e.preventDefault();

      const containerRect = containerRef.current.getBoundingClientRect();
      const sliderWidth = sliderRef.current.offsetWidth;
      const maxPosition = containerRect.width - sliderWidth - 8;
      const newPosition = Math.max(0, Math.min(clientX - containerRect.left, maxPosition));
      setSliderPosition(newPosition);

      if (newPosition >= maxPosition) {
        setIsActive(true);
        setIsDragging(false);
        onSuccess();
      }
    };

    const handleEnd = () => {
      if (isDragging && !isActive) {
        setSliderPosition(0); 
      }
      setIsDragging(false);
    };

    // Add event listeners only when dragging
    if (isDragging) {
      document.addEventListener('mousemove', handleMove);
      document.addEventListener('mouseup', handleEnd);
      document.addEventListener('touchmove', handleMove, { passive: false });
      document.addEventListener('touchend', handleEnd);
    }

    // Clean up event listeners when not dragging
    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseup', handleEnd);
      document.removeEventListener('touchmove', handleMove);
      document.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging, isActive, onSuccess]);

  const handleMouseDown = () => {
    if (!isActive) {
      setIsDragging(true);
    }
  };

  const handleTouchStart = (e) => {
    if (!isActive) {
      setIsDragging(true);
      e.preventDefault(); // Prevent default touch behavior when starting the swipe
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
        className={`absolute top-1 left-1 w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors ${isActive ? 'bg-green-500' : 'bg-red-500'}`}
        style={{ transform: `translateX(${sliderPosition}px)` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {isActive ? <EndIcon size={18} /> : <StartIcon size={18} />}
      </div>
    </div>
  );
};

export default SwipeableButton;
