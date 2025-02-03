'use client'

import { useState } from 'react';
import Link from "next/link";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        onClick={handleToggle}
        className="flex flex-col items-center justify-center w-10 h-10 bg-transparent border-none cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40 40" 
          width="30"
          height="30"
          className="transition-all"
        >
          {/* Línea superior */}
          <rect
            x="10"
            y="10"
            width="20"
            height="3"
            fill="white"
            className={`transition-all origin-center ${isOpen ? 'rotate-45 translate-y-[6px]' : ''}`}
          />

          {/* Línea del medio */}
          <rect
            x="10"
            y="18"
            width="20"
            height="3"
            fill="white"
            className={`transition-all ${isOpen ? 'opacity-0' : ''}`}
          />

          {/* Línea inferior */}
          <rect
            x="10"
            y="26"
            width="20"
            height="3"
            fill="white"
            className={`transition-all origin-center ${isOpen ? '-rotate-45 -translate-y-[6px]' : ''}`}
          />
        </svg>
      </button>

      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } bg-[#002346] text-white`}
      >
        <ul className="flex flex-col">
          <li>
            <Link href="/#" className="hover:font-semibold">
                <span>
                    Iniciar sesion
                </span>
            </Link>
          </li>
          <li>
            <Link href="/#" className="hover:font-semibold">
                <span>
                    Registrarse
                </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
