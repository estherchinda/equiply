import Image from "next/image";
import Button from "@/ui/forms/Button";

export default function Home() {
  // Cards data
  const cards = [
    {
      title: "Save Time",
      content:
        "Access a wide range of tools and equipment without the need for ownership, saving you valuable time.",
      img: "/clock.svg",
    },
    {
      title: "Connect with Peers",
      content:
        "Connect with a network of local farmers and share resources, fostering a collaborative community.",
      img: "/peers.svg",
    },
    {
      title: "Reduce Costs",
      content:
        "Reduce your expenses by renting tools only when you need them, eliminating maintenance and storage costs.",
      img: "/cost.svg",
    },
  ];

  return (
    <section>
      <div className="py-10 px-10 md:px-20 lg:px-40 bg-[#122117] h-full">
        <div className="flex flex-col justify-center items-center">
          <div className="relative w-[90%] h-[400px] md:h-[600px] lg:h-[450px] 2xl:h-[700px] rounded-md">
            <Image
              src="/hero.svg"
              alt="Hero Image"
              fill
              className="object-cover rounded-3xl"
              priority
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-white text-center space-y-4">
              <h1 className="text-2xl md:text-4xl lg:text-5xl 2xl:7xl font-extrabold leading-snug">
                Unlock the Potential of Your Farm
              </h1>
              <p className="text-sm md:text-base 2xl:text-2xl max-w-xl leading-relaxed">
                Equiply connects farmers with a network of peers who own idle
                agricultural tools, allowing you to save time, labor, and money.
              </p>
              <div className="flex justify-center mt-6">
                <Button content="Get Started" href="/sign-up" />
              </div>
            </div>
          </div>

          {/* why choose equiply */}
          <div className="py-10 px-0 md:px-4 text-white w-fit 2xl:w-full">
            <div className="space-y-4">
              <h2 className="font-extrabold text-2xl md:text-4xl md:leading-[45px]">
                Why Choose Equiply?
              </h2>
              <p className="text-xs md:text-base font-normal md:leading-6 ">
                Equiply offers a range of benefits for farmers looking to
                optimize their operations and increase efficiency.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="bg-[#1C3324] border border-[#366347] rounded-[8px] h-[157px] w-full lg:w-[300px] 2xl:w-full p-4 space-y-2"
                >
                  <Image src={card.img} alt="Icon" height={25} width={25} />
                  <h3 className="text-base font-bold leading-5">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#94C7A8] leading-5 font-light">
                    {card.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
