import Button from "@/app/ui/forms/Button";
import Heading from "@/app/ui/display/HeadingComponent";
import Image from "next/image";

export default function ProfilePage() {
  return (
    <section className="py-3 md:mx-10">
      {/* profile name */}
      <section className="h-fit lg:p-4 flex flex-col lg:flex-row justify-between items-start lg:items-center">
        <div className="flex flex-row items-center gap-4">
          <div className="h-32 w-32 rounded-full">
            <Image
              src={"/pfp.jpeg"}
              alt="Profile Image"
              height={128}
              width={128}
              style={{ height: "auto", width: "auto" }}
              className="rounded-full"
            />
          </div>
          <div>
            <Heading content="Ethan Carter" />
            <p className="text-sm text-[#94C7A8] font-normal leading-6">
              Farmer in Kastina, Nigeria
            </p>
          </div>
        </div>
        <div className="w-full md:w-[480px] flex items-center gap-3 mt-5 lg:mt-0">
          <Button content="Message" isSecondary={true} />
          <Button content="Follow" />
        </div>
      </section>
    </section>
  );
}
