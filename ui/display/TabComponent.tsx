import Link from "next/link";

type TabComponentProps = {
    tabName: string;
    href: string;
    pathname: string;
}

export default function TabComponent({
    tabName, 
    href,
    pathname,
}: TabComponentProps) {
    const isActive = pathname === href;
    return (
        <div className={`${isActive ? "border-b-2 border-white" : ""} hover:cursor-pointer hover:text-[#1A352A]`}>
            <Link href={href} className={`${isActive ? 'text-white' : 'text-[#94C7A8]'} text-sm`}>{ tabName }</Link>
        </div>
    )
}