import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-emerald-200 shadow-md">
      <div className="container mx-auto flex flex-col items-center justify-between h-16 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex-shrink-0">
          <h1 className="text-xl font-bold text-gray-800">
            Projeto Microfundamentos
          </h1>
        </div>
        <div className="flex">
          <Button>Sobre</Button>
          <Button>Objetivos</Button>
          <Button>Microfundamentos</Button>
          <Button href="https://github.com/Programando-o-Mundo/Microfundamentos">
            Contribuir
          </Button>
        </div>
      </div>
    </nav>
  );
};

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
}

const Button = ({ href, children }: ButtonProps) => {
  const handleClick = () => {
    if (href !== undefined) window.location.href = href;
  };

  return (
    <button
      className="ml-4 text-gray-700 hover:text-gray-900 font-medium"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Navbar;
