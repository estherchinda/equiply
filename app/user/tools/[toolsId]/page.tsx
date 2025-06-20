import TableRow from "@/app/ui/tools/TableRow"; // adjust path if needed
import { tools } from "@/app/lib/tools";
import Link from "next/link";
import ProfileImageComponent from "@/app/ui/display/ProfileImageComponent";
import ContactComponent from "@/app/ui/tools/ContactComponent";
import HeadingComponent from "@/app/ui/display/HeadingComponent";

interface ToolDetailsProps {
  params: Promise<{
    toolsId: string;
  }>;
}

export async function generateStaticParams() {
  return tools.map((tool) => ({
    toolsId: tool.id,
  }));
}

export async function generateMetadata({ params }: ToolDetailsProps) {
  const { toolsId } = await params; // Await the params Promise
  const tool = tools.find((t) => t.id === toolsId);

  return {
    title: `${tool?.toolType} - Equiply`,
    description: tool?.description,
  };
}

export default async function ToolDetails({ params }: ToolDetailsProps) {
  const { toolsId } = await params; // Await the params Promise
  const tool = tools.find((t) => t.id === toolsId);

  if (!tool) {
    return (
      <div className="h-screen flex justify-center items-center">
        Tool not found
      </div>
    );
  }

  const details = [
    { label: "Tool type", value: tool.toolType },
    { label: "Make", value: tool.make },
    { label: "Model", value: tool.model },
    { label: "Year", value: tool.year },
    { label: "Horsepower", value: tool.horsepower },
    { label: "Fuel type", value: tool.fuelType },
    { label: "Transmission", value: tool.transmission },
    { label: "Drive type", value: tool.drivetype },
    { label: "Condition", value: tool.condition },
    { label: "Availability", value: tool.availability },
  ];

  const pricing = [
    { label: "Daily rate", value: tool.pricing.dailyRate },
    { label: "Weekly rate", value: tool.pricing.weeklyRate },
    { label: "Monthly rate", value: tool.pricing.monthlyRate },
    { label: "Security deposit", value: tool.pricing.secureDeposit },
  ];

  return (
    <section className="h-full md:mx-8">
      <p className="text-sm font-medium leading-6 space-x-2">
        <Link href="/user/tools" className="text-[#94C7A8]">
          Tools
        </Link>
        <span className="text-[#94C7A8]">/</span>
        <span>{tool.toolType}</span>
      </p>

      <div className="flex flex-col justify-center items-center p-4 space-y-5">
        <div className="h-[400px] md:h-[600px] w-full xl:w-[920px] rounded-[12px] bg-[#264533] animate-pulse"></div>

        {/* tool type  and description */}
        <div className="w-full">
          <h1 className="text-[22px] font-bold leading-7 mb-2.5">
            {tool.toolType}
          </h1>
          {/* <HeadingComponent content={tool.toolType} /> */}
          <p className="leading-6 text-sm">{tool.description}</p>
        </div>

        {/* details */}
        <div className="w-full">
          <HeadingComponent content="About this tool" marginBottom="5" />
          {details.map((item) => (
            <TableRow key={item.label} label={item.label} value={item.value} />
          ))}
        </div>

        {/* pricing */}
        <div className="w-full">
          <HeadingComponent content="Pricing" marginBottom="5" />
          {pricing.map((item) => (
            <TableRow
              key={item.label}
              label={item.label}
              value={item.value}
              showNairaSign={true}
            />
          ))}
        </div>

        {/* owner */}
        <div className="w-full">
          <HeadingComponent content="Owner" marginBottom="5" />
          <div className="flex items-center gap-4">
            <ProfileImageComponent />
            <div className="space-y-1">
              <h4 className="text-sm font-medium leading-6">Ethan Carter</h4>
              <p className="text-xs leading-5 text-[#94C7A8]">Joined 2021</p>
            </div>
          </div>
        </div>

        {/* contact owner */}
        <ContactComponent />
      </div>
    </section>
  );
}
