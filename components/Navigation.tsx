import Image from "next/image";

const links = [
    'About',
    'How it works',
    'Contact',
]

export default function Navigation() {
    return (
        <nav className="h-[65px] w-full px-10 py-3 bg-[#122117] flex justify-between items-center border-b border-[#E5E8EB]">
            <Image 
            src={"/logo.svg"}
            alt="Equiply 2025."
            width={200}
            height={200}
            />

            <ul className="flex text-white gap-9">
                {links.map((link, index) => (
                    <li key={index} className="hover:cursor-pointer hover:text-[#A6F2C4] transition-colors duration-300 nav-link">{link}</li>
                ))}
            </ul>
        </nav>
    )
}