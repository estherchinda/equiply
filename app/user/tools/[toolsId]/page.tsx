import TableRow from "@/ui/tools/TableRow"; // adjust path if needed
import { tools } from "@/lib/tools";
import Link from "next/link";
import HeadingComponent from "@/ui/display/HeadingComponent";
import Carousel from "@/ui/tools/Carousel";
import Button from "@/ui/forms/Button";

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
        <Carousel
        images={tool.images}
        />

        {/* tool type  and description */}
        <div className="w-full">
          <h1 className="text-[22px] font-bold leading-7 mb-2.5">
            {tool.toolType}
          </h1>
          {/* <HeadingComponent content={tool.toolType} /> */}
          <p className="leading-6 text-sm">{tool.description}</p>
        </div>

          {/* details */}
          <div className="w-full mt-5">
            <HeadingComponent content="About this tool" marginBottom="5" />
            <div className="grid grid-cols-1 md:grid-cols-2">
              {details.slice(0, 5).map((item) => (
                <TableRow
                  key={item.label}
                  label={item.label}
                  value={item.value}
                />
              ))}
                {details.slice(-5).map((item) => (
                <TableRow
                  key={item.label}
                  label={item.label}
                  value={item.value}
                />
              ))}
            </div>
          </div>
          {/* pricing */}
          <div className="w-full h-fit mt-10">
            <HeadingComponent content="Pricing" marginBottom="5" />
            <div className="grid grid-cols-1 md:grid-cols-2">
              {pricing.slice(0, 2).map((item) => (
                <TableRow
                  key={item.label}
                  label={item.label}
                  value={item.value}
                  showNairaSign={true}
                />
              ))}
              {pricing.slice(-2).map((item) => (
                <TableRow
                  key={item.label}
                  label={item.label}
                  value={item.value}
                  showNairaSign={true}
                />
              ))}
            </div>
          </div>

          {/* <RequestModal /> */}
          <Button 
          content="Request" 
          // href={`/user/tools/${tool.id}/request`} 
          />
      </div>
    </section>
  );
}
