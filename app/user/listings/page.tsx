import { tools } from "@/app/lib/tools";
import Tag from "@/app/ui/display/Tag";
import Link from "next/link";

export const metadata = {
  title: "Listings - Equiply",
  description: "View your active listings and track their statuses",
}

export default function Listings() {
  return (
    <section className="py-3 md:mx-10">
      <h2 className="text-[32px] font-bold leading-10 ">Your tools</h2>

      {/* tools */}
      <section className="space-y-1">
        {tools.map((tool) => (
          <div
            key={tool.id}
            className="p-4 w-full flex flex-col-reverse md:flex-row justify-between items-start md:items-center gap-4 md:gap-0"
          >
            <div className="space-y-2">
              <h3 className="text-[#94C7A8] text-sm leading-5 font-normal">
                Listed
              </h3>
              <h4 className="font-bold leading-5">{tool.toolType}</h4>
              <p className="text-[#94C7A8] text-sm leading-5 font-normal">
                {tool.availability === "Available"
                  ? "Available for rent"
                  : "Unavailable"}
              </p>
              <Link href={`/user/tools/${tool.id}`}>
                <Tag />
              </Link>
            </div>
            <div className="h-[170px] w-full md:w-[320px] rounded-[12px] bg-[#264533] animate-pulse"></div>
          </div>
        ))}
      </section>
    </section>
  );
}
