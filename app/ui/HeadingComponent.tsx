type HeadingProps = {
    content: string;
    marginBottom?: string
}

export default function Heading ({content, marginBottom = '2.5'}: HeadingProps) {
    return <h1 className={`text-[22px] font-bold leading-7 mb-${marginBottom}`}>{content}</h1>
}