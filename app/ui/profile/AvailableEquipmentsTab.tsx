import { tools } from "@/app/lib/tools";
import Heading from "@/app/ui/display/HeadingComponent";
import ToolTab from "@/app/ui/tools/ToolDisplayTab";

export default function AvailableEquipments() {
    return (
        <div className="my-10">
            <Heading content="Equipments" marginBottom="5" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {tools.slice(0, 8).map((tool) => (
                <ToolTab
                  key={tool.id}
                  href={`/user/tools/${tool.id}`}
                  title={tool.toolType}
                  subtitle={`Available in ${tool.distance} miles`}
                />
              ))}
            </div>
        </div>
    )
}