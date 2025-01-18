'use client'
import Link from "next/link";
import React, { useState } from "react";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={toggleMenu}
        className="bg-blue-500 text-white px-3 py-3 rounded-full hover:bg-blue-600 focus:outline-none"
      >
        {isOpen ? (
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <line x1="4" y1="4" x2="20" y2="20" stroke="white" strokeWidth="2" />
          <line x1="20" y1="4" x2="4" y2="20" stroke="white" strokeWidth="2" />
        </svg>
        ) : ( 
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <line x1="4" y1="6" x2="20" y2="6" stroke="white" strokeWidth="2" />
          <line x1="4" y1="12" x2="20" y2="12" stroke="white" strokeWidth="2" />
          <line x1="4" y1="18" x2="20" y2="18" stroke="white" strokeWidth="2" />
        </svg>
        )}
      </button>
      {isOpen && (
        <div className="absolute right-0 -mt-16 mr-16 w-48 bg-[#CBDCEB] rounded shadow-lg">
          <ul className="border-">
            <li>
              <Link href="/login"
                    className="block px-4 py-2 text-gray-800 font-medium rounded-t-lg hover:font-bold"
              >
                <p>Iniciar sesion</p>
              </Link>
            </li>
            <li>
              <Link
                href="/register"
                className="block px-4 py-2 text-gray-800 font-medium rounded-b-lg hover:font-bold"
              >
                <p>Registrarse</p>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
