import Image from "next/image";

type LandingCardProps = {
    img: string;
    title: string;
    content: string;
}

export default function LandingCard({
    img,
    title,
    content,
}: LandingCardProps) {
    return (
        <div className="bg-[#1C3324] border border-[#366347] rounded-[8px] h-fit md:h-[169px] w-full p-4 space-y-2">
          <Image src={img} alt="Icon" height={25} width={25} />
          <h3 className="text-base font-bold leading-5">
            {title}
          </h3>
          <p className="text-sm text-[#94C7A8] leading-5 font-light">
            {content}
          </p>
        </div>
    )
}