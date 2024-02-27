import React, { useEffect, useRef } from 'react';

interface ScrollContainerProps {
  children: React.ReactNode;
}

const ScrollContainer: React.FC<ScrollContainerProps> = ({ children }) => {
  const outerDiv = useRef<HTMLDivElement>(null);
  const innerDiv = useRef<HTMLDivElement>(null);

  // Start the container at the bottom
  useEffect(() => {
    if (outerDiv.current && innerDiv.current) {
      const outerHeight = outerDiv.current.clientHeight;
      const innerHeight = innerDiv.current.clientHeight;

      outerDiv.current.scrollTo({
        top: innerHeight - outerHeight,
        left: 0
      });
    }
  }, []); 

  // Scroll smoothly on change of children
  useEffect(() => {
    if (outerDiv.current && innerDiv.current) {
      const outerHeight = outerDiv.current.clientHeight;
      const innerHeight = innerDiv.current.clientHeight;

      outerDiv.current.scrollTo({
        top: innerHeight - outerHeight,
        left: 0,
        behavior: "smooth"
      });
    }
  }, [children]);

  return (
    <div
      ref={outerDiv}
      style={{
        position: "relative",
        height: "100%",
        overflow: "scroll"
      }}
    >
      <div
        ref={innerDiv}
        style={{
          position: "relative"
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ScrollContainer;