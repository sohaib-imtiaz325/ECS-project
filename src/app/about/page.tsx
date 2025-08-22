"use client";

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const firmContent = [
  {
    title: "About our firm",
    description:
      "Each design decision is guided by a deep appreciation for and understanding of how design is integrated in architecture, culture, civic, environmental, and economic factors that shape a project.",
    image: "/images/building.jpg", // ✅ Fixed path
  },
  {
    title: "Our firm story",
    description:
      "Each design decision is guided by a deep appreciation for and understanding of how design is integrated in architecture, culture, civic, environmental, and economic factors that shape a project.",
    image: "/images/cod.jpg", // ✅ Correct
  },
  {
    title: "How we started",
    description:
      "Each design decision is guided by a deep appreciation for and understanding of how design is integrated in architecture, culture, civic, environmental, and economic factors that shape a project.",
    image: "/images/codding.jpg", // ✅ Correct
  },
];

const teamMembers = [
  {
    name: "Doron Merdinger",
    title: "Founder & CEO",
    titleColor: "text-blue-400",
    description:
      "Nabeel Mughal, CEO of Doroni Aerospace, champions innovation and operational excellence. Previously, he led tech advancements at Merdinger House of Design and doubled Hazorfim’s revenues within four years as its CEO.",
    image: "/images/ceo.jpg",
  },
  {
    name: "John Doe",
    title: "Manager",
    titleColor: "text-green-400",
    description:
      "John is an experienced manager with expertise in overseeing projects and team coordination. He ensures smooth operations and effective communication across departments.",
    image: "/images/maniger.jpg",
  },
  {
    name: "Jane Smith",
    title: "Project Manager",
    titleColor: "text-yellow-400",
    description:
      "Jane excels in project management, from initial concept to final delivery. With her strong organizational skills, she ensures that each project is completed on time and within budget.",
    image: "/images/leader.jpg",
  },
];

const Firm = () => {
  return (
    <section className="bg-[#0a0a0a] text-white py-16 px-6 md:px-12">
      {/* About Our Firm */}
      <div className="mb-14 text-center">
        <h2 className="text-4xl font-extrabold mb-6">About our firm</h2>

        {/* Slider for images */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          className="rounded-2xl overflow-hidden shadow-lg mb-8"
        >
          {[1, 2].map((item) => (
            <SwiperSlide key={item}>
              <div className="relative w-full h-[300px] md:h-[400px]">
                <Image
                  src="/images/compny.jpg" // ✅ Fixed path
                  alt={`About our firm ${item}`}
                  fill
                  className="object-cover object-center scale-105 hover:scale-110 transition-transform duration-700"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Text below slider */}
        <p className="text-gray-300 text-base max-w-2xl mx-auto leading-relaxed">
          Each design decision is guided by a deep appreciation for and
          understanding of how design is integrated in architecture, culture,
          civic, environmental, and economic factors that shape a project.
        </p>
      </div>

      {/* Firm Story */}
      <div className="space-y-12">
        {/* Story section */}
        <div className="relative w-full h-[250px] md:h-[320px] rounded-xl overflow-hidden shadow-md">
          <Image
            src={firmContent[1].image}
            alt={firmContent[1].title}
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col items-center justify-center text-center p-6">
            <h3 className="text-2xl font-semibold mb-3">{firmContent[1].title}</h3>
            <p className="text-gray-200 text-sm md:text-base max-w-xl">
              {firmContent[1].description}
            </p>
          </div>
        </div>

        {/* How we started */}
        <div className="relative w-full h-[250px] md:h-[320px] rounded-xl overflow-hidden shadow-md">
          <Image
            src={firmContent[2].image}
            alt={firmContent[2].title}
            fill
            className="object-cover object-center"
          />
          <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-black/70 to-transparent p-5 text-center">
            <h3 className="text-2xl font-semibold mb-3">{firmContent[2].title}</h3>
            <p className="text-gray-200 text-sm md:text-base max-w-xl mx-auto">
              {firmContent[2].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Team = () => {
  return (
    <section className="bg-[#0a0a0a] text-white py-16 px-6 md:px-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold mb-4">OUR INNOVATORS</h2>
        <p className="text-gray-400 text-base max-w-2xl mx-auto">
          From our Doroni HQ in South Florida, our in-house team is building the
          next generation of flight technology from the ground up.
        </p>
      </div>

      {/* Team members */}
      <div className="grid md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500"
          >
            <div className="relative w-full h-[250px] md:h-[280px]">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="p-6 bg-[#111111] text-center">
              <p
                className={`text-xs font-bold tracking-wider uppercase ${member.titleColor} mb-1`}
              >
                {member.title}
              </p>
              <h3 className="text-xl font-bold uppercase mb-3">
                {member.name}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {member.description}
              </p>
            </div>
          </div>
        ))}
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
