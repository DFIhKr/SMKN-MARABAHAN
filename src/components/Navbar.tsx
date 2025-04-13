
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { label: 'Beranda', link: '/' },
    { 
      label: 'Profil', 
      link: '/profil',
      dropdown: [
        { label: 'Tentang Kami', link: '/profil/tentang' },
        { label: 'Visi & Misi', link: '/profil/visi-misi' },
        { label: 'Struktur Organisasi', link: '/profil/struktur' },
      ] 
    },
    { 
      label: 'Program Keahlian', 
      link: '/program',
      dropdown: [
        { label: 'Teknik Komputer & Jaringan', link: '/program/tkj' },
        { label: 'Otomatif', link: '/program/otomatif' },
        { label: 'Multimedia', link: '/program/multimedia' },
      ] 
    },
    { label: 'Berita', link: '/berita' },
    { label: 'Galeri', link: '/galeri' },
    { label: 'Kontak', link: '/kontak' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <img src="/lovable-uploads/af3aa59e-f20e-426a-918b-ab349e59eb12.png" alt="SMKN 2 Marabahan" className="w-10 h-10" />
            <div>
              <h1 className="text-xl font-bold text-school-blue">SMKN 2 Marabahan</h1>
              <p className="text-xs text-gray-600">Siap, Mandiri, Kreatif</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.dropdown ? (
                  <button className={`px-3 py-2 ${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-school-teal flex items-center gap-1`}>
                    {item.label}
                    <ChevronDown size={16} />
                  </button>
                ) : (
                  <Link to={item.link} className={`px-3 py-2 ${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-school-teal`}>
                    {item.label}
                  </Link>
                )}
                
                {item.dropdown && (
                  <div className="absolute left-0 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-1">
                      {item.dropdown.map((dropItem, idx) => (
                        <Link 
                          key={idx} 
                          to={dropItem.link} 
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {dropItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Button className="ml-3 bg-school-teal hover:bg-school-blue">PPDB Online</Button>
          </div>

          {/* Mobile menu button */}
          <button 
            className={`lg:hidden ${isScrolled ? 'text-gray-700' : 'text-white'} focus:outline-none`}
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 bg-white rounded-lg shadow-md pb-4 animate-fade-in">
            {navItems.map((item, index) => (
              <div key={index} className="py-2">
                {item.dropdown ? (
                  <div className="px-4">
                    <div className="font-medium text-gray-800 mb-2">{item.label}</div>
                    <div className="pl-4 border-l-2 border-gray-200 space-y-2">
                      {item.dropdown.map((dropItem, idx) => (
                        <Link 
                          key={idx} 
                          to={dropItem.link} 
                          className="block text-sm text-gray-600 hover:text-school-teal"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link 
                    to={item.link} 
                    className="block px-4 text-gray-800 hover:text-school-teal"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="px-4 mt-4">
              <Button className="w-full bg-school-teal hover:bg-school-blue">PPDB Online</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
