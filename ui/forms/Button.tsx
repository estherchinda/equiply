"use client";

import Link from "next/link";

type ButtonProps = {
  content: string;
  href?: string;
  onClick?: () => void;
  isSecondary?: boolean
};

export default function Button({ content, href, onClick, isSecondary }: ButtonProps) {
  const classes = `${isSecondary ? 'bg-[#264533] text-white hover:bg-[#1a352a] transition-colors duration-300' : 'bg-[#A6F2C4] text-[#122117] button'} rounded-3xl h-10 md:h-12 w-full px-5 md:px-10 shadow-md leading-6 font-bold hover:cursor-pointer text-sm md:text-base`;

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
