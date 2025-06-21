import { tools } from "@/lib/tools";
import { reviews } from "@/lib/reviews";
// import Link from "next/link";
import ToolTab from "@/ui/tools/ToolDisplayTab";
import Heading from "@/ui/display/HeadingComponent";
import ReviewsRow from "@/ui/profile/ReviewsRowComponent";
import Table from "@/ui/display/TableComponent";
import { headers, data } from "@/lib/rental-history";

export default function All() {

  return (
    <section className="mt-10 space-y-10">
      {/* available equipments */}
      <div>
        <Heading content="Available Equipment" marginBottom="5" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {tools.slice(0, 4).map((tool) => (
            <ToolTab
              key={tool.id}
              href={`/user/tools/${tool.id}`}
              title={tool.toolType}
              subtitle={`Available in ${tool.distance} miles`}
            />
          ))}
        </div>
      </div>

      {/* reviews */}
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <Heading content="Reviews" marginBottom="5" />
          {/* <Link href={""} className="text-sm underline text-[#94C7A8]">See all</Link> */}
        </div>
        {reviews.slice(0, 2).map((review) => (
          <ReviewsRow
            key={review.id}
            image={review.image}
            name={review.name}
            date={review.date}
            review={review.review}
            stars={review.stars}
          />
        ))}
      </div>

      {/* rental history */}
      <div className="space-y-5">
        <Heading content="Rental History" marginBottom="5" />
        <div className="md:w-[85%]">
          <Table headers={headers} rows={data} rowsPerPage={2} />
        </div>
      </div>
    </section>
  );
}
