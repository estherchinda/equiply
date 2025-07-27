import Image from "next/image";
import Link from "next/link";

export default function ProfileImageComponent () {
    return (
        <Link href={"/user/profile"} className="h-[40px] w-[40px] rounded-full relative overflow-hidden">
          <Image
            src="/pfp-male.webp"
            alt="Profile picture"
            width={34}
            height={34}
            className="w-auto h-auto object-contain rounded-full"
            style={{'width': 'auto', 'height': 'auto'}}
          />
        </Link>
    )
}