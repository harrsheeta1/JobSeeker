"use client";
import Image from "next/image";
import Flipcard from '@/components/flipcard/page'
export default function Home() {
  const expertise=
    { title: "Expertise", description:'We provide highly skilled professionals in web development, design, and marketing with years of training and proven experience.' };
   const experience=
    {title:"Experience", description:'Backed by a strong track record, our experts have successfully delivered over 100+ projects globally, across various industries.'};
  return (
       <section className="py-20 px-6 text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to JobSeeker</h1>
      <p className="text-lg max-w-2xl mx-auto mb-12">
        Your one-stop freelance platform to connect with skilled professionals in web development, design, and marketing.
      </p>
                                                             
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Flipcard front={expertise.title} back={expertise.description} />
        <Flipcard front={experience.title} back={experience.description} />
      </div>
    </section>
  );
}
