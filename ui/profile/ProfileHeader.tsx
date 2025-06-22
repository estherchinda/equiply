import Image from "next/image";
import Heading from "@/ui/display/HeadingComponent";
import Button from "@/ui/forms/Button";

export default function ProfileHeader() {
  return (
    <section className="h-fit lg:p-4 flex flex-col lg:flex-row justify-between items-start lg:items-center">
      <div className="flex flex-row items-center gap-4">
        <div className="h-20 w-20 md:h-32 md:w-32 rounded-full overflow-hidden">
          <Image
            src="/pfp.jpeg"
            alt="Profile Image"
            height={128}
            width={128}
            className="rounded-full object-cover h-full w-full"
          />
        </div>
        <div>
          <Heading content="Ethan Carter" marginBottom="0" />
          <p className="text-sm text-[#94C7A8] font-normal leading-6">
            Farmer in Kastina, Nigeria
          </p>
        </div>
      </div>
      <div className="w-[80%] md:w-[480px] flex items-center gap-3 mt-5 lg:mt-0">
        <Button content="Message" isSecondary={true} />
        <Button content="Follow" />
      </div>
    </section>
  );
}
