
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, Briefcase, Award } from "lucide-react";

const Cta = () => {
  const stats = [
    {
      icon: GraduationCap,
      value: "1200+",
      label: "Siswa"
    },
    {
      icon: Users,
      value: "85+",
      label: "Tenaga Pengajar"
    },
    {
      icon: Briefcase,
      value: "50+",
      label: "Mitra Industri"
    },
    {
      icon: Award,
      value: "150+",
      label: "Prestasi"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-school-blue opacity-90 z-0"></div>
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center mix-blend-overlay opacity-20 z-0"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Siap Bergabung dengan SMKN 2 Marabahan?</h2>
            <p className="text-gray-200 mb-8">
              Daftarkan diri Anda sekarang dan jadilah bagian dari perjalanan menuju karir yang sukses. 
              Kami menyediakan pendidikan kejuruan berkualitas yang akan mempersiapkan Anda untuk masa depan yang cerah.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-school-blue hover:bg-gray-100 font-medium">
                PPDB Online
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-school-blue">
                Hubungi Kami
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
                <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <stat.icon className="text-white" size={24} />
                </div>
                <div className="text-white text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-gray-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
