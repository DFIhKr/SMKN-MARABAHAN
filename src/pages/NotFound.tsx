
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center py-24">
        <div className="text-center px-4">
          <h1 className="text-9xl font-bold text-school-blue">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-6 mb-4">Halaman Tidak Ditemukan</h2>
          <p className="text-gray-600 max-w-md mx-auto mb-8">
            Maaf, halaman yang Anda cari tidak dapat ditemukan atau telah dipindahkan.
          </p>
          <Button className="bg-school-blue hover:bg-opacity-90">
            <Link to="/">Kembali ke Beranda</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
