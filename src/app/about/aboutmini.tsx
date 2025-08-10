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
      "Doron, CEO of Doroni Aerospace, champions innovation and operational excellence. Previously, he led tech advancements at Merdinger House of Design and doubled Hazorfim’s revenues within four years as its CEO.",
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
    <section className="bg-[#0a0a0a] text-white py-10 px-4">
      {/* About Our Firm */}
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold mb-4">About our firm</h2>
        <p className="text-gray-400 mb-8 text-sm">
          Each design decision is guided by a deep appreciation for and
          understanding of how design is integrated in architecture, culture,
          civic, environmental, and economic factors that shape a project.
        </p>

        {/* Two images stacked */}
        <div className="space-y-4">
          <div className="relative w-full h-[250px]">
            <Image
              src="/images/img.avif"
              alt="About our firm"
              fill
              className="object-cover object-center rounded-lg"
            />
          </div>
          <div className="relative w-full h-[250px]">
            <Image
              src="/images/img.avif"
              alt="About our firm"
              fill
              className="object-cover object-center rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Firm Story */}
      <div className="space-y-10">
        {/* Story section */}
        <div className="space-y-4 text-center">
          <div className="relative w-full h-[200px]">
            <Image
              src={firmContent[1].image}
              alt={firmContent[1].title}
              fill
              className="object-cover object-center rounded-lg"
            />
          </div>
          <div className="relative w-full h-[200px]">
            <Image
              src={firmContent[2].image}
              alt={firmContent[2].title}
              fill
              className="object-cover object-center rounded-lg"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">{firmContent[1].title}</h3>
            <p className="text-gray-400 text-sm">{firmContent[1].description}</p>
          </div>
        </div>

        {/* How we started */}
        <div className="space-y-4 text-center">
          <div className="relative w-full h-[200px]">
            <Image
              src={firmContent[2].image}
              alt={firmContent[2].title}
              fill
              className="object-cover object-center rounded-lg"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">{firmContent[2].title}</h3>
            <p className="text-gray-400 text-sm">{firmContent[2].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Team = () => {
  return (
    <section className="bg-[#0a0a0a] text-white py-10 px-4">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">OUR INNOVATORS</h2>
        <p className="text-gray-400 mb-8 text-sm">
          From our Doroni HQ in South Florida, our in-house team is building the
          next generation of flight technology from the ground up.
        </p>

        {/* Team members stacked */}
        <div className="space-y-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative w-full h-[220px]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="p-4 bg-[#111111] text-center">
                <p
                  className={`text-xs font-semibold uppercase ${member.titleColor} mb-1`}
                >
                  {member.title}
                </p>
                <h3 className="text-lg font-bold uppercase mb-2">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-400">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FirmAndTeam = () => {
  return (
    <div>
      <Firm />
      <Team />
    </div>
  );
};

export default FirmAndTeam;
