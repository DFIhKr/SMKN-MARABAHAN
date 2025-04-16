
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Faisal Basikal",
      role: "Alumni TKJ 2021, bekerja di PT. Telkom Indonesia",
      image: "/eren.jpeg",
      quote: "Berkat pendidikan di SMKN 2 Marabahan, saya mendapatkan bekal keterampilan yang sangat relevan dengan kebutuhan industri IT. Saat ini saya sudah bekerja di perusahaan telekomunikasi terkemuka."
    },
    {
      id: 2,
      name: "Aming Bombardir",
      role: "Alumni Otomotif 2022, pemilik usaha catering",
      image: "/levi.jpeg",
      quote: "Ilmu yang saya dapatkan di jurusan otomotif sangat bermanfaat untuk membangun usaha permodifan basikal saya. Para guru tidak hanya mengajarkan teknik balapan, tapi juga safeti raiding yang aplikatif."
    },
    {
      id: 3,
      name: "Dvaren",
      role: "Alumni TKJ 2027, Pengendali Ai",
      image: "/armin.jpeg",
      quote: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
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
        <div className="relative max-w-4xl mx-auto bottom-8">
          <div className="absolute -top-6 left-12 bg-school-teal rounded-full p-3 z-10">
            <Quote className="text-white" size={24} />
          </div>
          <div className="overflow-hidden py-2">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${activeIndex * 100}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="relative bg-gray-50 rounded-2xl p-8 md:p-12 shadow-md w-full flex-shrink-0"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3  gap-8 items-center">
                    <div className="md:col-span-1 md:pl-4">
                      <div className="w-39 h-39 rounded-full overflow-hidden mx-auto md:mx-0 border-4 border-white shadow-lg ">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <div className="md:col-span-2 relative">
                      <blockquote className="text-gray-700 italic mb-6 pl-4 pr-4">
                        {testimonial.quote}
                      </blockquote>
                      <div className="absolute left-0 top-0 text-4xl text-gray-300">"</div>
                      <div className="absolute right-0 top-0 text-4xl text-gray-300">"</div>
                      <div>
                        <h4 className="font-bold text-lg text-school-blue">{testimonial.name}</h4>
                        <p className="text-gray-600 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
))}
</div>
</div>

<div className="flex justify-center mt-8 gap-4">
<button 
  onClick={prevTestimonial}
  className="bg-white text-school-blue border border-gray-200 rounded-full p-2 hover:bg-school-blue hover:text-white transition-colors"
  aria-label="Previous testimonial"
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
      aria-label={`Go to testimonial ${index + 1}`}
    ></button>
  ))}
</div>
<button 
  onClick={nextTestimonial}
  className="bg-white text-school-blue border border-gray-200 rounded-full p-2 hover:bg-school-blue hover:text-white transition-colors"
  aria-label="Next testimonial"
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