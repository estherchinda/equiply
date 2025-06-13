import Link from "next/link"

export default function Navigation({content, href}: {content: string; href:string}) {
    return (
        <Link href={href}>
            <button className="bg-[#A6F2C4] rounded-3xl h-12 w-full text-[#122117] px-10 shadow-md leading-6 font-bold hover:cursor-pointer button">
                { content }
            </button>
        </Link>
    )
}