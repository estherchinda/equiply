export default function Footer() {
    const links = [
        "Terms of Service",
        "Privacy Policy",
        "Contact Us",
    ]
    return (
        <footer className="h-[150px] bg-[#122117] px-40 flex justify-center items-center flex-col gap-6">
            <div className="flex justify-between items-center w-full">
                {links.map((link, index) => (
                    <p key={index} className="text-[#94C7A8] leading-6 text-base nav-link hover:cursor-pointer">{link}</p>
                ))}
            </div>
            <p className="text-[#94C7A8] leading-6 text-base">&copy; 2025 Equiply. All rights reserved.</p>
        </footer>
    )
}