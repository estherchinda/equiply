import Heading from "@/ui/display/HeadingComponent";
import Table from "@/ui/display/TableComponent";
import { headers, data } from "@/lib/rental-history";

export default function RentalHistory() {
    return (
        <div className="space-y-5 my-10">
            <Heading content="Rental History" marginBottom="5" />
            <div className="md:w-[85%]">
              <Table headers={headers} rows={data} />
            </div>
          </div>
    )
}