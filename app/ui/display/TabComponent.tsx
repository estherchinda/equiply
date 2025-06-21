type TabComponentProps = {
    tabName: string;
    activeTab: number;
    index: number;
    changeTab: () => void;
}

export default function TabComponent({
    tabName, 
    activeTab, 
    index, 
    changeTab
}: TabComponentProps) {
    return (
        <div onClick={changeTab} className={`${activeTab === index ? "border-b-2 border-white" : ""} hover:cursor-pointer hover:text-[#1A352A]`}>
            <span className={`${activeTab === index ? 'text-white' : 'text-[#94C7A8]'} text-xs md:text-sm`}>{ tabName }</span>
        </div>
    )
}