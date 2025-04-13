
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { label: "Beranda", link: "/" },
    { label: "Tentang Kami", link: "/profil/tentang" },
    { label: "Program Keahlian", link: "/program" },
    { label: "Berita", link: "/berita" },
    { label: "Galeri", link: "/galeri" },
    { label: "Kontak", link: "/kontak" }
  ];
  
  const programLinks = [
    { label: "Teknik Komputer & Jaringan", link: "/program/tkj" },
    { label: "Tata Boga", link: "/program/tata-boga" },
    { label: "Multimedia", link: "/program/multimedia" }
  ];
  
  const infoLinks = [
    { label: "PPDB Online", link: "/ppdb" },
    { label: "Kalender Akademik", link: "/kalender" },
    { label: "Struktur Organisasi", link: "/profil/struktur" },
    { label: "Ekstrakurikuler", link: "/ekstrakurikuler" }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* School Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src="/placeholder.svg" alt="SMKN 2 Marabahan" className="w-10 h-10" />
              <div>
                <h2 className="font-bold text-white text-xl">SMKN 2 Marabahan</h2>
                <p className="text-xs text-gray-400">Siap, Mandiri, Kreatif</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              SMK Negeri 2 Marabahan adalah lembaga pendidikan kejuruan yang berdedikasi untuk menciptakan lulusan berkualitas, 
              terampil, dan siap kerja.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-school-blue w-9 h-9 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-school-blue w-9 h-9 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-school-blue w-9 h-9 rounded-full flex items-center justify-center transition-colors"
              >
                <Youtube size={18} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-school-blue w-9 h-9 rounded-full flex items-center justify-center transition-colors"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Link Cepat</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.link}
                    className="text-gray-400 hover:text-school-teal transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Program & Other Info Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Program & Informasi</h3>
            <ul className="space-y-2">
              {programLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.link}
                    className="text-gray-400 hover:text-school-teal transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-gray-800"></li>
              {infoLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.link}
                    className="text-gray-400 hover:text-school-teal transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Kontak Kami</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="text-school-teal flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-400">
                  Jl. Pendidikan No. 123, Marabahan, Kalimantan Selatan 70513
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="text-school-teal flex-shrink-0" size={18} />
                <span className="text-gray-400">(0541) 123456</span>
              </li>
              <li className="flex gap-3">
                <Mail className="text-school-teal flex-shrink-0" size={18} />
                <span className="text-gray-400">info@smkn2marabahan.sch.id</span>
              </li>
              <li className="flex gap-3">
                <Clock className="text-school-teal flex-shrink-0" size={18} />
                <span className="text-gray-400">Senin - Jumat: 07.00 - 16.00 WITA</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>© {currentYear} SMK Negeri 2 Marabahan. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
