type TagProps = {
    text?: string
}

export default function TagComponent({text = "View listing"}: TagProps) {
    return (
        <span className="h-[32px] w-[107px] rounded-2xl bg-[#264533] px-3 py-0.5 flex justify-center items-center hover:cursor-pointer">
            <span className="text-white text-xs leading-5 font-medium">{text}</span>
        </span>
    )
}