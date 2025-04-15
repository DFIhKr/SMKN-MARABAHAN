import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Andi Saputra",
      role: "Alumni TKJ 2021, bekerja di PT. Telkom Indonesia",
      image: "/placeholder.svg",
      quote: "Berkat pendidikan di SMKN 2 Marabahan, saya mendapatkan bekal keterampilan yang sangat relevan dengan kebutuhan industri IT. Saat ini saya sudah bekerja di perusahaan telekomunikasi terkemuka."
    },
    {
      id: 2,
      name: "Siti Nurhaliza",
      role: "Alumni Tata Boga 2022, pemilik usaha catering",
      image: "/placeholder.svg",
      quote: "Ilmu yang saya dapatkan di jurusan Tata Boga sangat bermanfaat untuk membangun usaha kuliner saya. Para guru tidak hanya mengajarkan teknik memasak, tapi juga kewirausahaan yang aplikatif."
    },
    {
      id: 3,
      name: "Rizky Pratama",
      role: "Alumni Multimedia 2023, desainer grafis freelance",
      image: "/placeholder.svg",
      quote: "Program Multimedia di SMKN 2 Marabahan memberikan dasar yang kuat dalam desain grafis dan editing video. Berkat keterampilan ini, saya bisa menjadi freelancer dan menghasilkan pendapatan yang baik."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-school-blue mb-4">Testimoni Alumni</h2>
          <p className="text-gray-600">
            Dengarkan pengalaman langsung dari para alumni kami yang telah sukses meniti karir
            setelah lulus dari SMKN 2 Marabahan
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto overflow-hidden">
          <div 
            className="relative bg-gray-50 rounded-2xl p-8 md:p-12 shadow-md transition-all duration-500 transform"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            <div className="absolute -top-6 left-12 bg-school-teal rounded-full p-3">
              <Quote className="text-white" size={24} />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto md:mx-0 border-4 border-white shadow-lg">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="md:col-span-2">
                <blockquote className="text-gray-700 italic mb-6 transition-all duration-300 transform">
                  "{testimonials[activeIndex].quote}"
                </blockquote>
                <div>
                  <h4 className="font-bold text-lg text-school-blue">{testimonials[activeIndex].name}</h4>
                  <p className="text-gray-600 text-sm">{testimonials[activeIndex].role}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prevTestimonial}
              className="bg-white text-school-blue border border-gray-200 rounded-full p-2 hover:bg-school-blue hover:text-white transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeIndex ? "bg-school-teal w-6" : "bg-gray-300"
                  }`}
                ></button>
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="bg-white text-school-blue border border-gray-200 rounded-full p-2 hover:bg-school-blue hover:text-white transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
