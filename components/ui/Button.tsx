"use client"

export default function Navigation({content}: {content: string}) {
    return (
        <button className="bg-[#A6F2C4] rounded-3xl h-12 text-[#122117] px-10 shadow-md leading-6 font-bold hover:cursor-pointer button">
            { content }
        </button>
    )
}