'use client'

import { useState } from 'react';
import Link from 'next/link';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {/* Botón para abrir y cerrar el menú */}
      <button
        onClick={handleToggle}
        className="flex flex-col items-center justify-center w-10 h-10 bg-transparent border-none cursor-pointer"
      >
        {isOpen ? (
          // SVG de la cruz (cuando el menú está abierto)
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="30" height="30">
            <line x1="10" y1="10" x2="30" y2="30" stroke="white" strokeWidth="3" />
            <line x1="10" y1="30" x2="30" y2="10" stroke="white" strokeWidth="3" />
          </svg>
        ) : (
          // SVG del menú hamburguesa (cuando el menú está cerrado)
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="30" height="30">
            <rect x="10" y="10" width="20" height="3" fill="white" />
            <rect x="10" y="18" width="20" height="3" fill="white" />
            <rect x="10" y="26" width="20" height="3" fill="white" />
          </svg>
        )}
      </button>

      {/* Menú de opciones */}
      <div
        className={`${isOpen ? 'block' : 'hidden'} bg-black text-white p-4
        2xs:w-screen right-0 top-[70px] bg-opacity-20 text-center absolute z-20`}
      >
        <ul className="flex flex-col space-y-4">
          <li>
            <Link href="/login" className="hover:font-bold" onClick={handleClose}>
              Iniciar sesión
            </Link>
          </li>
          <li>
            <Link href="/register" className="hover:font-bold" onClick={handleClose}>
              Registrarse
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
