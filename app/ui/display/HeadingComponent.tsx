// import Link from "next/link"

type HeadingProps = {
    content: string;
    marginBottom?: string;
    // href?: string;
    // isWithLink?: boolean;
}

export default function Heading ({content, marginBottom = '2.5'}: HeadingProps) {
    return (
        <div>
            <h1 className={`text-[22px] font-bold leading-7 whitespace-nowrap mb-3 mb-${marginBottom}`}>{content}</h1>
            {/* {isWithLink && <Link href={href} className="hover:underline">See all</Link>} */}
        </div>
    )
}