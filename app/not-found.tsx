import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col bg-[#122117] text-center">
      <h1 className="text-2xl lg:text-4xl font-bold text-white">404 - Page Not Found</h1>
      <p className="text-gray-300 mt-4 text-sm md:text-base">
        The page you&apos;re looking for does not exist.
      </p>
      <Link
        href={"/user/home"}
        className="inline-block nav-link text-[#94C7A8] leading-5 font-normal my-5 text-sm md:text-base"
      >
        Back to Home
      </Link>
    </div>
  );
}
