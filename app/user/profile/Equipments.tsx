import { tools } from "@/lib/tools";
import Heading from "@/ui/display/HeadingComponent";
import ToolTab from "@/ui/tools/ToolDisplayTab";

export default function Equipments() {
  return (
    <div className="my-10">
      <Heading content="Available Equipments" marginBottom="5" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {tools.slice(0, 8).map((tool) => (
          <ToolTab
            image={tool.images[0]}
            key={tool.id}
            href={`/user/tools/${tool.id}`}
            title={tool.toolType}
            subtitle={`Available in ${tool.distance} miles`}
          />
        ))}
      </div>
    </div>
  );
}
