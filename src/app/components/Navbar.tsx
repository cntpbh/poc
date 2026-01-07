import { Button } from "./ui/button";
import { Rocket, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "figma:asset/c2a2aff017ef5c15a87d2439ffac730d743f0012.png";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#home" className="flex items-center">
              <img 
                src={logo} 
                alt="IBEDIS" 
                className="h-10 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </a>
            <a href="#projetos" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Projetos
            </a>
            <a href="#como-funciona" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Como Funciona
            </a>
            <a href="#sobre" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Sobre
            </a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Login
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
              Cadastrar
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-lg animate-fade-in">
          <div className="px-4 py-4 space-y-3">
            <a
              href="#home"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#projetos"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projetos
            </a>
            <a
              href="#como-funciona"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Como Funciona
            </a>
            <a
              href="#sobre"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sobre
            </a>
            <div className="pt-4 flex flex-col gap-2">
              <Button variant="outline" className="w-full">
                Login
              </Button>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600">
                Cadastrar
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}