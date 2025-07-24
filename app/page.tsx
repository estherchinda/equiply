import Image from "next/image";
import Button from "@/ui/forms/Button";
import LandingCard from "@/ui/display/LandingCard";
import Heading from "@/ui/display/HeadingComponent";
import {
  cards,
  featuredEquipments,
  howItWorks,
  ownerVsRenterBody,
  ownerVsRenterHeader,
  testimonials,
  safetyAndTrust,
} from "@/lib/landing";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <section>
      <div className="py-10 px-10 md:px-20 lg:px-40 bg-[#122117] h-full">
        <div className="flex flex-col justify-center items-center space-y-10 text-white">
          <div className="relative w-full h-[400px] lg:h-[512px] 2xl:h-[700px] rounded-xl">
            <Image
              src="/equiply-landing-image.png"
              alt="Hero Image"
              fill
              className="object-cover rounded-xl"
              priority
            />
            <div className="absolute top-0 bg-black/50 w-full h-full rounded-xl"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center space-y-4">
              <h1 className="text-2xl md:text-4xl lg:text-5xl 2xl:7xl font-extrabold">
                Rent & Lease Farming Gear <br className="hidden md:block" /> in
                Minutes
              </h1>
              <p className="text-sm md:text-base 2xl:text-2xl max-w-xl leading-relaxed">
                Match with local farmers who own tractors, harvesters, plows,
                and tools—rent what you need or earn extra by leasing yours.
              </p>
              <div className="flex justify-center mt-4">
                <Button content="Get Started" href="/sign-up" />
              </div>
            </div>
          </div>

          {/* why choose equiply */}
          <div>
            <Heading content="Why Choose Equiply?" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-3">
              {cards.map((card, index) => (
                <LandingCard
                  key={index}
                  img={card.img}
                  title={card.title}
                  content={card.content}
                />
              ))}
            </div>
          </div>

          {/* featured equipment */}
          <div className="relative">
            <Heading content="Featured Equipments" />
            <button className="absolute top-[40%] -left-16 h-10 w-10 rounded-full bg-[#1C3324] border border-[#366347] text-white cursor-pointer flex justify-center items-center">
              <FaArrowLeft />
            </button>

            <button className="absolute top-[40%] -right-16 h-10 w-10 rounded-full bg-[#1C3324] border border-[#366347] text-white cursor-pointer flex justify-center items-center">
              <FaArrowRight />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
              {featuredEquipments.map((f, i) => (
                <div key={i} className="space-y-3">
                  <div className="w-full md:w-[300px] h-[200px] relative">
                    <Image
                      src={f.image}
                      alt={f.title}
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded-xl"
                    />
                  </div>
                  <h3 className="font-medium leading-6 text-base">{f.title}</h3>
                  <p className="text-sm font-normal leading-5 text-[#A3B2A8]">
                    {f.subtitle}
                  </p>
                  <button className="text-base font-normal leading-5 text-[#A3B2A8] cursor-pointer hover:text-white">
                    Rent Now
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* how it works */}
          <div>
            <Heading content="Our 3-Step Process to How it Works" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
              {howItWorks.map((card, index) => (
                <LandingCard
                  key={index}
                  img={card.img}
                  title={card.title}
                  content={card.content}
                />
              ))}
            </div>
          </div>

          {/* owner vs renter */}
          <div className="w-full">
            <Heading content="How it Helps Our Users" />
            <div className="w-full border border-[#366347] rounded-[12px] bg-[#122117] overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#1C3324]">
                  <tr className="border-b border-[#4A5D4A]">
                    {ownerVsRenterHeader.map((row, idx) => (
                      <th key={idx} className="text-left py-4 px-6 text-white font-medium text-base">
                        {row}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {ownerVsRenterBody.map((row, idx) => (
                    <tr key={idx} className="border-b border-[#4A5D4A]">
                      <td className="py-6 px-6 text-[#A8BFA8] text-sm leading-relaxed">
                        {row.owner}
                      </td>
                      <td className="py-6 px-6 text-[#A8BFA8] text-sm leading-relaxed">
                        {row.renter}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* testimonials */}
          <div>
            <Heading content="Testimonials" className="text-center"/>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="space-y-2">
                  <div className="w-full h-[300px] relative">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded-xl"
                    />
                  </div>
                  <p className="text-base font-normal leading-5 text-white">
                    &quot;{testimonial.review}&quot;
                  </p>
                  <h3 className="font-medium leading-6 text-sm text-[#A3B2A8]">
                    {testimonial.name}, {testimonial.job}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* safety and trust */}
          <div className="w-full">
            <Heading content="Safety and Trust" />
            <div className="space-y-5">
              {safetyAndTrust.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className={`w-5 h-5 ${index % 2 === 1 ? "rounded-[4px]" : "rounded-[20px]"} border-2 border-[#404F45]`}></div>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
