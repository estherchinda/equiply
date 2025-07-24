import Link from "next/link";

type TabComponentProps = {
    tabName: string;
    href: string;
    pathname: string;
    activeTab?: number;
    index?: number;
}

export default function TabComponent({
    tabName, 
    href,
    pathname,
    activeTab = 1,
    index,
}: TabComponentProps) {
    const isActive = pathname === href;
    return (
        <div className={`${isActive || activeTab === index ? "border-b-2 border-white" : ""} hover:cursor-pointer hover:text-[#1A352A]`}>
            <Link href={href} className={`${isActive || activeTab === index ? 'text-white' : 'text-[#94C7A8]'} text-sm`}>{ tabName }</Link>
        </div>
    )
}