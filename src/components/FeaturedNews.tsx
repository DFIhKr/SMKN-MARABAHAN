
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturedNews = () => {
  // Mock news data
  const featuredNews = [
    {
      id: 1,
      title: "SMKN 2 Marabahan Raih Juara Lomba Kompetensi Siswa Tingkat Provinsi",
      excerpt: "Tim SMK Negeri 2 Marabahan berhasil meraih juara pertama dalam ajang Lomba Kompetensi Siswa (LKS) tingkat Provinsi Kalimantan Selatan dalam bidang jaringan komputer.",
      image: "/placeholder.svg",
      date: "12 Apr 2025",
      category: "Prestasi"
    },
    {
      id: 2,
      title: "Kunjungan Industri ke PT. Telkom Indonesia",
      excerpt: "Siswa jurusan Teknik Komputer dan Jaringan melakukan kunjungan industri ke PT. Telkom Indonesia untuk mempelajari teknologi jaringan terkini.",
      image: "/placeholder.svg",
      date: "8 Apr 2025",
      category: "Kegiatan"
    },
    {
      id: 3,
      title: "Workshop Kuliner Nusantara bersama Chef Profesional",
      excerpt: "Jurusan Tata Boga mengadakan workshop kuliner nusantara dengan mengundang chef profesional untuk berbagi pengetahuan dan pengalaman.",
      image: "/placeholder.svg",
      date: "3 Apr 2025",
      category: "Workshop"
    }
  ];

  const latestNews = [
    {
      id: 4,
      title: "Pelatihan Digital Marketing untuk Siswa SMK",
      date: "1 Apr 2025",
      category: "Pelatihan"
    },
    {
      id: 5,
      title: "Pelaksanaan Ujian Praktik Kejuruan Tahun 2025",
      date: "28 Mar 2025",
      category: "Akademik"
    },
    {
      id: 6,
      title: "Persiapan Akreditasi Program Keahlian Multimedia",
      date: "25 Mar 2025",
      category: "Info Sekolah"
    },
    {
      id: 7,
      title: "Pameran Hasil Karya Siswa Jurusan Multimedia",
      date: "20 Mar 2025",
      category: "Event"
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-school-blue mb-2">Berita Terbaru</h2>
            <p className="text-gray-600 max-w-2xl">Informasi terkini seputar kegiatan dan prestasi SMKN 2 Marabahan</p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0 border-school-blue text-school-blue hover:bg-school-blue hover:text-white">
            Lihat Semua Berita <ChevronRight className="ml-1" size={16} />
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main featured news */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-md overflow-hidden">
            <div className="relative h-64 md:h-80">
              <img 
                src={featuredNews[0].image} 
                alt={featuredNews[0].title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-school-orange text-white text-sm font-medium px-3 py-1 rounded-full">
                {featuredNews[0].category}
              </div>
            </div>
            <div className="p-6">
              <span className="text-sm text-gray-500">{featuredNews[0].date}</span>
              <h3 className="text-2xl font-bold mt-2 mb-3 text-school-blue hover:text-school-teal transition-colors">
                <Link to={`/berita/${featuredNews[0].id}`}>{featuredNews[0].title}</Link>
              </h3>
              <p className="text-gray-600 mb-4">{featuredNews[0].excerpt}</p>
              <Link 
                to={`/berita/${featuredNews[0].id}`}
                className="text-school-teal font-medium hover:text-school-blue inline-flex items-center"
              >
                Baca Selengkapnya <ChevronRight className="ml-1" size={16} />
              </Link>
            </div>
          </div>

          {/* News list */}
          <div className="flex flex-col space-y-6">
            {/* Secondary news */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden card-hover">
              <div className="relative h-48">
                <img 
                  src={featuredNews[1].image} 
                  alt={featuredNews[1].title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-school-teal text-white text-sm font-medium px-3 py-1 rounded-full">
                  {featuredNews[1].category}
                </div>
              </div>
              <div className="p-4">
                <span className="text-sm text-gray-500">{featuredNews[1].date}</span>
                <h3 className="text-lg font-bold mt-1 mb-2 text-school-blue hover:text-school-teal transition-colors">
                  <Link to={`/berita/${featuredNews[1].id}`}>{featuredNews[1].title}</Link>
                </h3>
                <Link 
                  to={`/berita/${featuredNews[1].id}`}
                  className="text-school-teal font-medium hover:text-school-blue inline-flex items-center text-sm"
                >
                  Baca Selengkapnya <ChevronRight className="ml-1" size={14} />
                </Link>
              </div>
            </div>

            {/* Latest news list */}
            <div className="bg-white rounded-xl shadow-md p-5">
              <h3 className="font-bold text-xl mb-4 text-school-blue">Terbaru</h3>
              <div className="space-y-4">
                {latestNews.map((news) => (
                  <div key={news.id} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                    <Link 
                      to={`/berita/${news.id}`}
                      className="hover:text-school-teal font-medium text-gray-800 transition-colors text-sm md:text-base block"
                    >
                      {news.title}
                    </Link>
                    <div className="flex items-center mt-1 text-xs text-gray-500">
                      <span>{news.date}</span>
                      <span className="mx-2">•</span>
                      <span className="text-school-teal">{news.category}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedNews;
