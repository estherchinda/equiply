import Image from "next/image";
import Link from "next/link";

export default function ProfileImageComponent () {
    return (
        <Link href={"/user/profile/all"} className="h-[40px] w-[40px] rounded-full overflow-hidden">
          <Image
            src="/pfp.jpeg"
            alt="Profile picture"
            width={40}
            height={40}
            className="w-auto h-auto object-cover rounded-full"
            style={{'width': 'auto', 'height': 'auto'}}
          />
        </Link>
    )
}