"use client";

import Link from "next/link";

type ButtonProps = {
  content: string;
  href?: string;
  onClick?: () => void;
};

export default function Button({ content, href, onClick }: ButtonProps) {
  const classes = "bg-[#A6F2C4] rounded-3xl h-12 w-full text-[#122117] px-10 shadow-md leading-6 font-bold hover:cursor-pointer";

  if (href) {
    return (
      <Link href={href}>
        <button className={classes}>{content}</button>
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
