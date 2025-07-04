import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#05131f] text-white py-12 px-4 flex flex-col items-center space-y-12">
      <h1 className="text-5xl font-bold">About Us</h1>

      {/* Image */}
      <div className="bg-white p-4 rounded-2xl shadow-md">
        <Image
          src={"/your-image.jpg"} // <-- Replace with actual image path
          alt="About Team"
          className="rounded-xl"
          width={250}
          height={250}
        />
      </div>
      {/* Boxed Description */}
      <div className="w-full bg-gradient-to-br from-[#0a0f18] via-[#14212f] to-[#f0f0f0] px-4 py-10 flex justify-center items-start">
        <div className="w-full max-w-2xl bg-black/50 backdrop-blur-md p-6 rounded-xl shadow-2xl text-white space-y-6">
          <p className="text-xl font-medium leading-relaxed">
            JobSeeker is a one roof solution for your technical requirements. We have a methodical team which caters all your needs from web development to logo designing and will also support you throughout with digital marketing and much more. Our team of technical experts will provide you a personalized experience available nowhere else within the limits of your pocket.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;



