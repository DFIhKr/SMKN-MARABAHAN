
import { Button } from "@/components/ui/button";
import { CheckCircle, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const highlights = [
    "Sekolah terakreditasi A",
    "Fasilitas lengkap dan modern",
    "Guru-guru berkualifikasi S1 dan S2",
    "Program magang di perusahaan ternama",
    "Tingkat keterserapan lulusan tinggi",
    "Bimbingan karir dan wirausaha"
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="./smk.jpg" 
                alt="SMKN 2 Marabahan" 
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
            <div className="absolute top-12 -right-6 z-0 w-full h-full bg-school-teal rounded-lg"></div>
            <div className="absolute -bottom-6 -left-6 z-0 w-3/4 h-1/2 bg-school-blue rounded-lg"></div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-school-blue mb-4">Tentang SMKN 2 Marabahan</h2>
            <p className="text-gray-600 mb-6">
              SMK Negeri 2 Marabahan adalah lembaga pendidikan kejuruan yang berdedikasi untuk menciptakan lulusan berkualitas, 
              terampil, dan siap kerja. Kami memiliki komitmen untuk memberikan pendidikan terbaik dengan kurikulum yang relevan 
              dengan kebutuhan industri saat ini.
            </p>
            <p className="text-gray-600 mb-6">
              Dalam setiap program keahlian, kami menggabungkan pembelajaran teori dan praktik secara seimbang, 
              serta memberikan pengalaman nyata melalui program prakerin (praktik kerja industri) dan kelas industri.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="text-school-teal" size={18} />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-school-blue hover:bg-opacity-90 text-white">
                <Link to="/profil/tentang">Tentang Kami</Link>
              </Button>
              <Button variant="outline" className="border-school-blue text-school-blue hover:bg-school-blue hover:text-white">
                <Link to="/profil/visi-misi" className="flex items-center">
                  Visi & Misi <ChevronRight className="ml-2" size={16} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
