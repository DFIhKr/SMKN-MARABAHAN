
import { Button } from "@/components/ui/button";
import { Computer, Cookie, Film, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Programs = () => {
  const programs = [
    {
      id: "tkj",
      title: "Teknik Komputer & Jaringan",
      icon: Computer,
      color: "bg-blue-500",
      description: "Program keahlian yang mempelajari tentang perakitan komputer, instalasi jaringan, dan administrasi server.",
      features: [
        "Perakitan dan troubleshooting komputer",
        "Instalasi dan konfigurasi jaringan",
        "Administrasi sistem dan server",
        "Keamanan jaringan komputer"
      ]
    },
    {
      id: "tata-boga",
      title: "Tata Boga",
      icon: Cookie,
      color: "bg-orange-500",
      description: "Program keahlian yang mempelajari pengolahan makanan, pastry, dan manajemen usaha kuliner.",
      features: [
        "Pengolahan makanan Indonesia dan internasional",
        "Pembuatan kue dan roti",
        "Food styling dan presentasi",
        "Manajemen usaha kuliner"
      ]
    },
    {
      id: "multimedia",
      title: "Multimedia",
      icon: Film,
      color: "bg-purple-500",
      description: "Program keahlian yang mempelajari desain grafis, animasi, video editing, dan pengembangan web.",
      features: [
        "Desain grafis dan manipulasi gambar",
        "Pembuatan animasi 2D dan 3D",
        "Produksi dan editing video",
        "Perancangan dan pengembangan web"
      ]
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-school-blue mb-4">Program Keahlian</h2>
          <p className="text-gray-600">
            Kami menawarkan berbagai program keahlian yang dirancang untuk mempersiapkan siswa menghadapi dunia kerja dengan
            keterampilan yang relevan dan dibutuhkan industri
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div key={program.id} className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className={`${program.color} h-2`}></div>
              <div className="p-6">
                <div className={`${program.color} bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                  <program.icon className={program.color.replace('bg-', 'text-')} size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className={`${program.color.replace('bg-', 'text-')} mt-1`}>•</div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to={`/program/${program.id}`}
                  className={`${program.color.replace('bg-', 'text-')} font-medium hover:underline inline-flex items-center`}
                >
                  Selengkapnya <ChevronRight className="ml-1" size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-school-blue hover:bg-opacity-90 text-white">
            <Link to="/program">Lihat Semua Program Keahlian</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;
