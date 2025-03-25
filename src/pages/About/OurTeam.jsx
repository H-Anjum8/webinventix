import React from "react";

const teamMembers = [
  {
    name: "Dan Gratton",
    position: "CHIEF EXECUTIVE OFFICER",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
    description:
      "Dan Gratton is a seasoned executive with over 30 years of experience in business strategy, AI, and digital transformation...",
  },
  {
    name: "Dr. Ghazanfar Monir",
    position: "TECHNICAL CONSULTANT",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
    description:
      "Dr. Monir specializes in Signal Processing and AI. With a PhD in Computer Science, he has led multiple innovative projects...",
  },
  {
    name: "Dr. Hussain Parvez",
    position: "TECHNICAL CONSULTANT",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
    description:
      "Dr. Parvez holds a PhD and MSc in Computer Science. His expertise lies in AI applications and digital transformation...",
  },
];

const OurTeam = () => {
  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-center text-4xl font-bold mb-10">Our Team</h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-[#121212] p-6 rounded-xl shadow-lg flex items-center gap-6">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-lg object-cover"
              />
              <div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-[#32e2bc] text-sm font-semibold">{member.position}</p>
                <p className="text-gray-300 mt-2">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
