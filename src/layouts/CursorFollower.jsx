import { useEffect, useRef, useState } from "react";

const CursorFollower = () => {
  const cursorRef = useRef(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const currentX = useRef(0);
  const currentY = useRef(0);
  const [isHoveringMedia, setIsHoveringMedia] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.current = e.clientX + 10;
      mouseY.current = e.clientY + 10;

      const target = e.target;
      if (
        target.tagName === "IMG" ||
        target.tagName === "VIDEO" ||
        target.closest(".cursor-follow")
      ) {
        setIsHoveringMedia(true);
      } else {
        setIsHoveringMedia(false);
      }

    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      currentX.current += (mouseX.current - currentX.current) * 0.1;
      currentY.current += (mouseY.current - currentY.current) * 0.1;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${currentX.current}px, ${currentY.current}px)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 w-5 h-5 rounded-full pointer-events-none z-[9999] 
        hidden lg:block transition-colors duration-300 
        ${isHoveringMedia ? "bg-primary" : "bg-secondary"}`}
    />
  );
};

export default CursorFollower;
