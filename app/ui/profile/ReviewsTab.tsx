import Heading from "@/app/ui/display/HeadingComponent";
import ReviewsRow from "./ReviewsRowComponent";
import { reviews } from "@/app/lib/reviews";

export default function Reviews() {
    return (
        <div className="space-y-8">
            <Heading content="Reviews" marginBottom="5" />
            {reviews.map((review) => (
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
    )
}