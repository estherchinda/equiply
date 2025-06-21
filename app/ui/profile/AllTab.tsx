import Heading from "@/app/ui/display/HeadingComponent";
import { tools } from "@/app/lib/tools";
import { reviews } from "@/app/lib/reviews";
import ToolTab from "@/app/ui/tools/ToolDisplayTab";
import ReviewsRow from "@/app/ui/profile/ReviewsRowComponent";
import Table from "@/app/ui/display/TableComponent";

export default function All() {
    const headers = ['Equipment', 'Date', 'Duration', 'Status'];

    const data = [
        {
        equipment: 'Tractor',
        date: '2023-08-15',
        duration: '7 days',
        status: 'Completed',
        },
        {
        equipment: 'Plow',
        date: '2023-07-20',
        duration: '3 days',
        status: 'Completed',
        },
    ];

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
        <Heading content="Reviews" marginBottom="5" />
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
            <Table headers={headers} rows={data} />
        </div>
      </div>
    </section>
  );
}
