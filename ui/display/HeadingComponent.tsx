// import Link from "next/link"

type HeadingProps = {
    content: string;
    marginBottom?: string;
    className?: string;
    subtitle?: string;
    // href?: string;
    // isWithLink?: boolean;
}

export default function Heading ({
    content, 
    marginBottom = '2', 
    className,
    subtitle,
}: HeadingProps) {
    return (
        <div className="space-y-3">
            <h1 className={`text-[22px] font-bold leading-7 mb-${marginBottom} ${className}`}>{content}</h1>
            <p className="text-sm leading-5">{subtitle}</p>
            {/* {isWithLink && <Link href={href} className="hover:underline">See all</Link>} */}
        </div>
    )
}