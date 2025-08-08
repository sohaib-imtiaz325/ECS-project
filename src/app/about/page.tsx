"use client";

import Image from "next/image";
import React from "react";

const firmContent = [
  {
    title: "About our firm",
    description:
      "Each design decision is guided by a deep appreciation for and understanding of how design is integrated in architecture, culture, civic, environmental, and economic factors that shape a project.",
    image: "/images/img.avif",
  },
  {
    title: "Our firm story",
    description:
      "Each design decision is guided by a deep appreciation for and understanding of how design is integrated in architecture, culture, civic, environmental, and economic factors that shape a project.",
    image: "/images/img.avif",
  },
  {
    title: "How we started",
    description:
      "Each design decision is guided by a deep appreciation for and understanding of how design is integrated in architecture, culture, civic, environmental, and economic factors that shape a project.",
    image: "/images/img.avif",
  },
];

const teamMembers = [
  {
    name: "Doron Merdinger",
    title: "Founder & CEO",
    titleColor: "text-blue-400",
    description:
      "Doron, CEO of Doroni Aerospace champions innovation and operational excellence. Previously, he led tech advancements at Merdinger House of Design and doubled Hazorfim’s revenues within four years as its CEO.",
    image: "/images/img.avif",
  },
  {
    name: "John Doe",
    title: "Manager",
    titleColor: "text-green-400",
    description:
      "John is an experienced manager with expertise in overseeing projects and team coordination. He ensures smooth operations and effective communication across departments.",
    image: "/images/img.avif",
  },
  {
    name: "Jane Smith",
    title: "Project Manager",
    titleColor: "text-yellow-400",
    description:
      "Jane excels in project management, from initial concept to final delivery. With her strong organizational skills, she ensures that each project is completed on time and within budget.",
    image: "/images/img.avif",
  },
];

const Firm = () => {
  return (
    <section className="bg-[#0a0a0a] text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* About Our Firm */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About our firm
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 mb-12 text-sm md:text-base">
            Each design decision is guided by a deep appreciation for and
            understanding of how design is integrated in architecture, culture,
            civic, environmental, and economic factors that shape a project.
          </p>

          {/* Two Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="relative w-full h-64 md:h-96">
              <Image
                src="/images/img.avif"
                alt="About our firm"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative w-full h-64 md:h-96">
              <Image
                src="/images/img.avif"
                alt="About our firm"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Story & Start Sections */}
        <div className="space-y-16">
          {/* First Section */}
          <div className="flex flex-col-reverse md:flex-row md:items-center gap-6">
            <div className="flex-1 grid grid-cols-2 gap-4">
              <div className="relative w-full h-48 md:h-64">
                <Image
                  src={firmContent[1].image}
                  alt={firmContent[1].title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="relative w-full h-48 md:h-64">
                <Image
                  src={firmContent[2].image}
                  alt={firmContent[2].title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                {firmContent[1].title}
              </h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                {firmContent[1].description}
              </p>
            </div>
          </div>

          {/* Second Section */}
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1 relative w-full h-64 md:h-80">
              <Image
                src={firmContent[2].image}
                alt={firmContent[2].title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                {firmContent[2].title}
              </h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                {firmContent[2].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Team = () => {
  return (
    <section className="bg-[#0a0a0a] text-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-wide">
          OUR INNOVATORS
        </h2>
        <p className="max-w-2xl mx-auto mb-16 text-gray-400 text-sm md:text-base">
          From our Doroni HQ in South Florida, our in-house team is building the
          next generation of flight technology from the ground up.
        </p>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-lg overflow-hidden shadow-lg flex flex-col"
            >
              <div className="relative w-full h-56">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p
                  className={`text-xs font-semibold uppercase ${member.titleColor} mb-1`}
                >
                  {member.title}
                </p>
                <h3 className="text-lg font-bold uppercase mb-2">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FirmAndTeam = () => (
  <>
    <Firm />
    <Team />
  </>
);

export default FirmAndTeam;
