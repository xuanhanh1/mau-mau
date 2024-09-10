import React, { useEffect, useRef, ReactNode } from "react";

// Định nghĩa kiểu cho props
interface ClickOutWrapperProps {
  children: ReactNode;
  onClickOutside: () => void;
}

// Component ClickOutWrapper sử dụng TypeScript
const ClickOutWrapper: React.FC<ClickOutWrapperProps> = ({
  children,
  onClickOutside,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Kiểm tra nếu click bên ngoài element được tham chiếu

      console.log("wrapperRef.current", event);

      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        onClickOutside();
      }
    };

    // Lắng nghe sự kiện click trên toàn document
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup khi component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClickOutside]);

  return <div ref={wrapperRef}>{children}</div>;
};

export default ClickOutWrapper;
