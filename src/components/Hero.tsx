
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-school-blue via-blue-900 to-school-blue pt-24">
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-school-blue to-transparent"></div>
      
      <div className="container-custom relative z-10 flex flex-col h-[calc(100vh-6rem)] justify-center">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight animate-slide-up">
            Selamat Datang di <span className="text-school-teal">SMKN 2 Marabahan</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 animate-slide-up">
            Membentuk generasi unggul yang siap menghadapi tantangan global melalui pendidikan kejuruan berkualitas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
            <Button className="bg-school-teal text-white py-6 px-8 text-lg hover:bg-opacity-90">
              PPDB Online
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-school-blue py-6 px-8 text-lg">
              Jelajahi Program <ChevronRight className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 container-custom pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20">
            <h3 className="font-bold text-white text-xl mb-2">Fasilitas Lengkap</h3>
            <p className="text-gray-200">Laboratorium modern dan ruang praktik berstandar industri</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20">
            <h3 className="font-bold text-white text-xl mb-2">Guru Profesional</h3>
            <p className="text-gray-200">Tenaga pengajar berpengalaman dan tersertifikasi</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20">
            <h3 className="font-bold text-white text-xl mb-2">Link & Match</h3>
            <p className="text-gray-200">Kurikulum terintegrasi dengan kebutuhan dunia industri</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
