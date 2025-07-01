import React from 'react';
import free from '../images/free.jpg';
import team from '../images/team.jpeg'

const Team = () => {
  const teamMembers = [
    {
      name: "Sanjarbek Uralov",
      role: "CEO & Founder",
      image: team
    },
    {
      name: "John",
      role: "Head of Retention Marketing",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Joseph Paul",
      role: "Marketing Director",
      image: free
    }
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 text-center">
        {/* Header */}
        <h2 className="text-4xl sm:text-5xl font-bold text-blue-400 mb-3">
          Our Team
        </h2>
        <p className="text-gray-400 text-base sm:text-lg mb-14">
          Meet the experts behind your next revenue breakthrough.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center hover:scale-105 transition duration-300 ease-in-out"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-36 h-36 sm:w-40 sm:h-40 rounded-full object-cover mb-4 border-4 border-blue-500/20"
              />
              <h3 className="text-white text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-blue-400 text-sm font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
