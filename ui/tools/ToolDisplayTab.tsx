import Link from "next/link";
import Image from "next/image";

type ToolTabProps = {
    href: string;
    title: string;
    subtitle: string;
    image: string;
}

export default function ToolTab({
    href,
    title,
    subtitle,
    image,
}: ToolTabProps) {
    return (
        <div className="space-y-2 hover:cursor-pointer relative group">
            {/* image */}
            <div className="h-[100px] w-full rounded-[12px] bg-[#264533] relative overflow-hidden">
                <Image 
                src={image} 
                alt={title} 
                fill
                className="object-cover"
                />
                {/* link to details */}
                <Link
                href={href}
                className="absolute top-0 hidden group-hover:block h-[100px] w-full rounded-[12px] text-center justify-center"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                >
                    <p className="flex justify-center items-center h-full w-full text-sm">See more</p>
                </Link>
            </div>
            <h3 className="text-base font-medium leading-6">{title}</h3>
            <p className="text-sm text-[#94C7A8] leading-5">{subtitle}</p>
        </div>
    )
}