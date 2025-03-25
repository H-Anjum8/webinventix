import React from "react";
import img1 from '../../assets/images/1.png'
import img2 from '../../assets/images/2.jpg'
import img3 from '../../assets/images/3.jpg'

const teamMembers = [
  {
    name: "Dan Gratton",
    title: "CHIEF EXECUTIVE OFFICER",
    image: img1,
    description:
    "Dan Gratton is a globally experienced executive with over 20 years leading innovation, transformation, and sustainable growth across technology, finance, engineering and enterprise sectors. Having lived in 35 cities globally and driven strategic ventures across four continents. Dan brings a disciplined, passionate, results-focused approach shaped by his background of 12 years as a professional hockey player.  Backed by 30+ certifications and licenses spanning AI, cloud, cybersecurity, thermography, neural linguistics, prompt engineering, automation, generative AI, private investigation, business negotiation and strategy. Dan leads with speed, agility and vision—advancing Web Inventix AI’s mission to help organizations unlock innovation, strengthen resilience, and gain a competitive edge in today’s fast-moving digital landscape.",
  },
  {
    name: "Dr. Ghazanfar Monir",
    title: "TECHNICAL DIRECTOR",
    image: img2,
    description:
      "Dr. Monir received his doctorate in Signal Processing from Nanyang Technological University, Singapore in 2011. Since then, he has actively participated in research as well as commercial projects especially in the areas of image processing and computer vision. With more than twenty papers in international journals and conferences, ongoing active involvement in design and development of several commercial projects; his work encompasses the conversion of research work to software projects and products.  ",
  },


  {
    name: "Dr. Husain Parvez",
    title: "TECHNICAL DIRECTOR",
    image: img3,
    description:
      "Dr Husain Parvez holds a PhD and MS degree in Computer Science from University Pierre & Marie Curie (Paris-6), France. He did his Software Engineering degree from NUST. Dr. Parvez has extensive research and development experience at national and international institutes. He has worked at Avaz Networks, and Streaming Networks, Islamabad.Dr Parvez’s expertise includes software engineering, AI applications, embedded real time systems and cloud computing. Dr. Parvez has authored 1 book in Springer, 2 book chapters, 8 Journals and numerous conference papers. ",
  },
];

const TeamSection = () => {
  return (
    <section className="bg-black text-white py-16 px-4 flex justify-center">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-center text-4xl font-bold mb-10">Our Team</h2>
        <div className="w-full max-w-6xl px-6 lg:px-14 flex flex-col items-center">
          <div className="flex flex-col gap-12 items-center w-full">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-[#121212] p-6 rounded-xl flex flex-col md:flex-row items-center gap-6 w-full max-w-3xl shadow-[0px_4px_6px_0px_rgba(34,_197,_94,_0.5)]
">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-60 h-75 rounded-lg object-cover"
                />
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-[#32e2bc] text-sm font-semibold">{member.title}</p>
                    <p className="text-gray-300 mt-2 text-[12px]">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;