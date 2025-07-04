'use client';
const services = [
  {
    title: 'Digital Marketing',
    description:
      'Want your brand to be acclaimed? Broadcast your business to every inch of the web with our digital marketing.',
    icon: '/icons/marketing.png',
  },
  {
    title: 'Content Creation',
    description:
      'Confused about how to start your write-up? Let our experts glide in and take over with creativity.',
    icon: '/icons/content.png',
  },
  {
    title: 'Logo Designing',
    description:
      'Don’t have an identity for your idea? Give a face to your ideas with a whole new personalised designing experience.',
    icon: '/icons/logo.png',
  },
  {
    title: 'Graphic Designing',
    description:
      'Looking for a graphical experience? Let us take over and animate your imagination into a product.',
    icon: '/icons/graphic.png',
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-[#061c2b] text-white px-8 py-16">
      <div className="mb-16">
        <h1 className="text-5xl font-bold">Our Services</h1>
        <p className="text-lg mt-6 max-w-4xl">
         All of our services hinge around our promise of delivering brand awareness, traffic and leads by bringing content, marketing and sales together. Each of our Business Hubs feed into whichever digital marketing service that you require. Our innovative approach ensures that your business – whether small or large – receives perfectly tailored strategic insight and added value. They are the axis around which everything else revolves.
        </p>
      </div>

      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="relative group w-full h-[400px] bg-white text-black rounded-xl overflow-hidden shadow-lg"
          >
            {/* Moving Blue Blur */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-700 blur-md opacity-0 z-0 
  pointer-events-none 
  group-hover:opacity-40 
  group-hover:animate-curtain" />

            <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-center">
              <img src={service.icon} alt={service.title} className="w-20 h-20 mb-4" />
              <h2 className="text-xl font-bold mb-2">{service.title}</h2>
              <p className="text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ServicesPage;


